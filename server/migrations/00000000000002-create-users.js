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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable ('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      username: {
        // eslint-disable-next-line new-cap
        type: Sequelize.STRING (18),
        allowNull: true,
        unique: false,
      },
      email: {
        // eslint-disable-next-line new-cap
        type: Sequelize.STRING (150),
        allowNull: false,
        unique: true,
      },
      email_verified_at: {
        // eslint-disable-next-line new-cap
        type: Sequelize.DATE,
        allowNull: true,
      },
      full_name: {
        // eslint-disable-next-line new-cap
        type: Sequelize.STRING (75),
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      phone_number: {
        // eslint-disable-next-line new-cap
        type: Sequelize.STRING (20),
        allowNull: true,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable ('Users')
  },
}
