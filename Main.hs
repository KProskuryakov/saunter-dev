{-# LANGUAGE OverloadedStrings #-}

module Main where

import Control.Concurrent (MVar, modifyMVar, modifyMVar_, newMVar, readMVar)
import Control.Exception (finally)
import Control.Monad (forM_, forever)
import Data.Char (isPunctuation, isSpace)
import Data.Text (Text)
import qualified Data.Text as T
import qualified Data.Text.IO as T
import Network.Wai.Application.Static (defaultFileServerSettings, staticApp)
import Network.Wai.Handler.Warp (run)
import Network.Wai.Handler.WebSockets (websocketsOr)
import Network.Wai.Middleware.RequestLogger (logStdout)
import Network.WebSockets (Connection, ServerApp)
import qualified Network.WebSockets as WS

type Client = (Text, Connection)

type ServerState = [Client]

newServerState :: ServerState
newServerState = []

numClients :: ServerState -> Int
numClients = length

clientExists :: Client -> ServerState -> Bool
clientExists client = any ((== fst client) . fst)

addClient :: Client -> ServerState -> ServerState
addClient client state = client : state

removeClient :: Client -> ServerState -> ServerState
removeClient client = filter ((/= fst client) . fst)

broadcast :: Text -> ServerState -> IO ()
broadcast message clients = do
  T.putStrLn message
  forM_ clients $ \(_, conn) -> WS.sendTextData conn message

wsApp :: MVar ServerState -> ServerApp
wsApp state pending = do
  conn <- WS.acceptRequest pending
  WS.withPingThread conn 30 (return ()) $ do
    msg <- WS.receiveData conn
    clients <- readMVar state
    processMsg state clients conn msg
  where
    processMsg state clients conn msg
      | not (prefix `T.isPrefixOf` msg) =
        WS.sendTextData conn ("Wrong announcement" :: Text)
      | any ($ fst client) [T.null, T.any isPunctuation, T.any isSpace] =
        WS.sendTextData conn ("Name cannot contain any punctuation or whitespace, and cannot be empty" :: Text)
      | clientExists client clients =
        WS.sendTextData conn ("User already exists." :: Text)
      | otherwise = flip finally disconnect $ do
        modifyMVar_ state $ \s -> do
          let s' = addClient client s
          WS.sendTextData conn $
            "Welcome! Users: " <> T.intercalate ", " (map fst s)
          broadcast (fst client <> " joined") s'
          return s'
        talk client state
      where
        prefix = "Hi, I am "
        client = (T.drop (T.length prefix) msg, conn)
        disconnect = do
          s <- modifyMVar state $ \s ->
            let s' = removeClient client s in return (s', s')
          broadcast (fst client <> " disconnected") s

talk :: Client -> MVar ServerState -> IO ()
talk (user, conn) state = forever $ do
  msg <- WS.receiveData conn
  s <- readMVar state
  broadcast (user <> ": " <> msg) s

main :: IO ()
main = do
  state <- newMVar newServerState
  run 3000 $ websocketsOr WS.defaultConnectionOptions (wsApp state) (logStdout $ staticApp $ defaultFileServerSettings "public")
