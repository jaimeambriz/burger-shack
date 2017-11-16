var Sides = require('../models/side')
var Burgers = require('../models/burger')
var Drinks = require('../models/drink')
var router = require('express').Router()


router.get('/api/menu', (req, res, next) => {
    var menu = {}
    Sides.find({}, { name: 1, price: 1 })
        .then(side => {
            menu.side = side
            Burgers.find({}, { name: 1, price: 1 })
                .then(burger => {
                    menu.burger = burger
                    Drinks.find({}, { name: 1, sizes: 1 })
                        .then(drink => {
                            menu.drink = drink
                            res.send(menu)
                        })
                        .catch(err => {
                            res.status(400).send({ Error: err })
                        })
                })
                .catch(err => {
                    res.status(400).send({ Error: err })
                })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})



module.exports = router