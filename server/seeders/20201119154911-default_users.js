'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', require ('../data/default/users.json'))
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('users', null, {})
  },
}
