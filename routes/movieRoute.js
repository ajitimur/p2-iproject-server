const express = require('express')
const MovieController = require('../controllers/movieController')
const movieRoute = express.Router()


movieRoute.get(`/`, MovieController.getPopular)
movieRoute.get(`/search`, MovieController.searchMovie)
movieRoute.get(`/:MovieId`, MovieController.findById)

module.exports = movieRoute