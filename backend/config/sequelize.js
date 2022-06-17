const dbConfig =require('./database')
const Sequelize = require('Sequelize')

const sequelize = new Sequelize(dbConfig)

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports =db