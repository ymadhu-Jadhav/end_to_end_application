const router = require('express').Router()
const {Campus, Student} = require('../db/models')
module.exports = router

//GET:-All campuses ES5
// router.get('/',(req, res, next)=>{
//     Campus.findAll()
//     .then(function(campuses){
//         res.status(200).json(campuses);
//     })
//     .catch(next);
// })

//GET:-All campuses ES6
router.get('/',(req,res,next) => {
    Campus.findAll()
    .then((campuses)=> res.json(campuses))
    .catch(next)
})

//GET:-Single campus by campusID campuses/1
// router.get('/:campusid', isLoggedIn, (req, res, next) => {
// 	Campus.findById(req.params.id, {
// 			//include: {model: Student}
// 		})
// 		.then((campus) => {
// 		res.status(200).json(campus);
// 		})
// 		.catch(next);
// 	}
// );

router.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
      .then(campus => res.json(campus))
      .catch(next)
  })

router.post('/', (req, res, next) => {
	Campus.create(req.body)
		.then(campus => res.status(201).json(campus))
		.catch(next);
})

router.put('/:campusId', (req, res, next) => {
	Campus.update(req.body, {
		where: {id: req.params.campusId},
        returning: true
		})
		.then(([_, updated]) => res.status(201).json(updated[0]))
		.catch(next)
})

router.delete('/:campusId', (req, res, next) => {
	Campus.destroy({where: {id: req.params.campusId}})
		.then(() => res.sendStatus(204))
		.catch(next)
})