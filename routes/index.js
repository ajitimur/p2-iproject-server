const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const movieRoute = require('./movieRoute')
const reviewRoute = require('./reviewRoute')
const translateRoute = require('./translateRoute')
const userRoute = require('./userRoute')
const router = express.Router()


//User Routes
router.use(`/users`, userRoute)
router.use(`/reviews`, reviewRoute)
router.use(`/movies`, movieRoute)
router.use(`/translate`, translateRoute)

router.use(errorHandler)


module.exports = router