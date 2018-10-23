const Sequelize = require('sequelize')
const db = require('../db')
const Student = require('./student')

const Campus = db.define('campus',{
campusName:{
type:Sequelize.STRING,
allowNull: false,
validate:{
    notEmpty: true
}
},
imageUrl:{
    type:Sequelize.STRING,
    allowNull: false
    
}
})

// hook for deleting data from child table
Campus.hook('beforeDestroy', function(campus){
    return Student.destroy({
        where:{
            campusId: campus.id
        }
    })
})


module.exports = Campus
