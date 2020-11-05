'use strict'
const {Model} = require ('sequelize')

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Users extends Model {
    // eslint-disable-next-line valid-jsdoc
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Users.init ({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'schedules',
  })

  return Users
}
