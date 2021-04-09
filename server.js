const express = require('express')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const User = require('./back/models/usersModel')
const routes = require('./routes');

const sequelize = new Sequelize('testtask', 'root', 'medik852456', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize 

const test = async () => {
    try {
        await sequelize.authenticate();
        User.sync()
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

app.use('/api/', routes);

app.listen(PORT, () => {
    console.log('Сервер загружен на порту: ', PORT);
    test()
})