const express = require('express')
const ReviewController = require('../controllers/reviewController')
const authentication = require(`../middlewares/authentication`)
const authorization =  require(`../middlewares/authorization.js`)
const reviewRoute = express.Router()

reviewRoute.get(`/:MovieId`, ReviewController.getReview)
reviewRoute.use(authentication)
reviewRoute.post(`/:MovieId`, ReviewController.createReview)
reviewRoute.get(`/review/:ReviewId`,authorization, ReviewController.getReviewbyId)
reviewRoute.put(`/review/:ReviewId`,authorization, ReviewController.editReview)
reviewRoute.delete(`/review/:ReviewId`,authorization, ReviewController.deleteReview)

module.exports = reviewRoute