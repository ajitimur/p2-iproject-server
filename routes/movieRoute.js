const express = require('express')
const MovieController = require('../controllers/movieController')
const movieRoute = express.Router()


movieRoute.get(`/`, MovieController.getPopular)
movieRoute.get(`/:MovieId`, MovieController.findById)
movieRoute.get(`/search`, MovieController.searchMovie)

module.exports = movieRoute