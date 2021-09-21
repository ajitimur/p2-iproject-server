const express = require('express')
const MovieController = require('../controllers/movieController')
const authentication = require(`../middlewares/authentication`)
const authorization =  require(`../middlewares/authorization.js`)
const movieRoute = express.Router()


movieRoute.get(`/`, MovieController.getPopular)

module.exports = movieRoute