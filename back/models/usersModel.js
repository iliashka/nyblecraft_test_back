const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('testtask', 'root', 'medik852456', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('users2', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.BLOB('long'),
  },
  pdf: {
    type: DataTypes.BLOB('long'),
  }
})

module.exports = User