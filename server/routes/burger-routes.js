var Burgers = require('../models/burger')
var router = require('express').Router()


router.get('/api/burgers', (req, res, next)=>{
    Burgers.find({})
        .then(burgers =>{
            res.send(burgers)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/burgers/:id', (req, res, next)=>{
    Burgers.findById(req.params.id)
        .then(burger=>{
            res.send(burger)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/burgers', (req, res, next)=>{
    Burgers.create(req.body)
        .then(burger => {
            let response = {
                data: burger,
                message: 'Successfully created Burger!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


router.put('/api/burgers/:id', (req, res, next)=>{
    var action = 'Update Burger'
    Burgers.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(handleResponse(action, data))
        })
        .catch(err =>{
            res.status(400).send(handleResponse(action, null, err))
        })
})


router.delete('/api/burgers/:id', (req, res, next)=>{
    Burgers.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that burger'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

function handleResponse(action, data, error){
    var response =  {
        message: action,
        data: data
    }
    if(error){
        response.error = error
    }
    return response
}


module.exports = router