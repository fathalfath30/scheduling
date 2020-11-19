'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('roles', require ('../data/default/roles.json'))
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('roles', null, {})
  },
}
