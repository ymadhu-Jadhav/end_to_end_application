const router = require('express').Router()
const {Student, Campus} = require('../db/models')
 module.exports = router

 router.get('/', (req,res,next)=>{
     Student.findAll({include:[{model: Campus}]})
     .then(students => res.json(students))
     .catch(next)
 })
 //NOTE: we are using - Student.findAll({include:[{model: Campus}]}) because on UI we want to display campus name for each student.
 router.get('/:studentId', (req,res,next)=>{
     Student.findById(req.params.studentId)
     .then(student => res.json(student))
     .catch(next)
 })

 router.post('/', (req,res,next)=>{
     Student.create(req.body)
     .then(newStudent => res.json(newStudent))
     .catch(next)
 })

 router.put('/:studentId', (req,res,next)=>{
    Student.update(req.body,{
        where: {id: req.params.studentId},
            returning: true
    })
    .then(([_, updated]) => res.status(201).json(updated[0]))
		.catch(next)
})
 
router.delete('/:studentId', (req,res,next)=> {
    Student.destroy({
        where: {id: req.params.studentId}
    })
    .then(()=> res.sendStatus(204))
    .catch(next)
})