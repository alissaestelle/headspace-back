'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(models.User, {
        foreignKey: {
          name: 'userID',
          allowNull: false
        }
      })
    }
  }
  Character.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      level: DataTypes.INTEGER,
      stats: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Character',
      tableName: 'characters'
    }
  )
  return Character
}
