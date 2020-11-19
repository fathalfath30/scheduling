'use strict'
const {Model} = require ('sequelize')

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class AppSetting extends Model {
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

  AppSetting.init ({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    setting_key: DataTypes.STRING,
    setting_value: DataTypes.TEXT,
    created_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'app_setting',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })
  return AppSetting
}
