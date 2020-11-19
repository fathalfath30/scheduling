/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
const express = require ('express')
const app = express ()
const routes = require ('./routes')
const bodyParser = require ('body-parser')
const cookieParser = require ('cookie-parser')
const config = require ('./config')
const model = require ('./models')

try {
  app.use (bodyParser.urlencoded ({extended: false}))
  app.use (express.json ())
  app.use (cookieParser ())

  app.use ('/api', routes)

  // start server
  app.listen (config.app.listeningPort, () => {
    console.log (`Scheduling API server listening on port: ${config.app.listeningPort}`)
  })
} catch (e) {
  console.log (e.message)
}
