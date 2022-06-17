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
    username:{
        type: DataTypes.STRING
   
    },
    password:{
        type: DataTypes.STRING
    }
},{sequelize, modelName : "user"})


module.exports = User