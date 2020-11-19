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
'use strict'
const bcrypt = require ('bcrypt')
const config = require ('../config')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // eslint-disable-next-line prefer-const
    let data = []
    const plainData = require ('../data/default/users.json')

    plainData.forEach ((idx) => {
      data.push ({
        id: idx.id,
        username: idx.username,
        email: idx.email.toLowerCase (),
        email_verified_at: idx.email_verified_at,
        password: ((password) => bcrypt.hashSync (password, config.app.encryption.saltRounds)) (idx.password),
        role: idx.role,
        full_name: idx.full_name,
        date_of_birth: idx.date_of_birth,
        phone_number: idx.phone_number,
        created_at: idx.created_at,
        updated_at: idx.updated_at,
        deleted_at: idx.deleted_at,
      })
    })

    return queryInterface.bulkInsert ('users', data)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('users', null, {})
  },
}
