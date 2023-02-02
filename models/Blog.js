const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { }
//blog model
Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      blogname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      datemade: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
       
      },
      
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    }
    
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'blog'
    }
  );
  module.exports = Blog;