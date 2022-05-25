'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Achievement.belongsTo(models.Character, {
        foreignKey: 'characterID'
      })
    }
  }
  Achievement.init(
    {
      characterID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'characters',
          key: 'id'
        }
      },
      title: DataTypes.STRING,
      level: DataTypes.INTEGER,
      points: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Achievement',
      tableName: 'achievements'
    }
  )
  return Achievement
}
