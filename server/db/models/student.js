const Sequelize = require('sequelize')
const db = require ('../db')
// const Campus = require('./campus')

const Student = db.define('student', {
firstName: {
type: Sequelize.STRING,
allowNull: false,
validate:{
    notEmpty: true
}
},
lastName:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
        notEmpty: true
    }
},
email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate:{
        notEmpty: true,
        isEmail: true
    }
},
gpa: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
        notEmpty: true
    }
},

name:{
    type: Sequelize.VIRTUAL,
    get(){
        return this.firstName + ' '+ this.lastName
    }
},


})


module.exports = Student