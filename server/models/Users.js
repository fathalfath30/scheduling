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
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    // eslint-disable-next-line new-cap
    username: DataTypes.STRING (18),
    // eslint-disable-next-line new-cap
    email: DataTypes.STRING (150),
    email_verified_at: DataTypes.DATE,
    password: DataTypes.STRING,
    role: DataTypes.TINYINT,
    // eslint-disable-next-line new-cap
    full_name: DataTypes.STRING (75),
    date_of_birth: DataTypes.DATEONLY,
    // eslint-disable-next-line new-cap
    phone_number: DataTypes.STRING (20),
  }, {
    sequelize,
    modelName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })

  return Users
}
