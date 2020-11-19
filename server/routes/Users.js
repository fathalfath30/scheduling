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
// eslint-disable-next-line new-cap
const r = express.Router ()
// const jwt = require ('jsonwebtoken')

r.get ('/', (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    res.status (401).send ({
      status: 401,
      message: null,
      data: {},
    })
  }

  const token = authHeader.split (' ')
  if (token.length !== 2) {
    res.status (400).send ({
      status: 401,
      message: null,
      data: {},
    })
  }

  res.send ({
    Hello: 'hola!',
  })
})

module.exports = r
