const db = require("../config/sequelize.js");

const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class User extends Model{}
User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{sequelize, modelName : "user"})


module.exports = User