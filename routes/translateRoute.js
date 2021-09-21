const express = require('express')
const TranslateController = require('../controllers/translateController')
const translateRoute = express.Router()

translateRoute.post(`/`, TranslateController.translate)

module.exports = translateRoute