const { User, Review } = require(`../models`)


class ReviewController {
  static async createReview(req, res, next){
    const MovieId = req.params.MovieId
    const UserId = req.user.id;
    const { title, content, rating } = req.body
    
    try {
      const result = await Review.create({ title, content, rating, MovieId, UserId })
      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async getReview(req, res, next){
    const MovieId = req.params.MovieId
    try {
      const result = await Review.findAll({where: {MovieId}, include: [{model: User}], order: [[`updatedAt`, `DESC`]]})
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async getReviewbyId(req, res, next){
    const ReviewId = req.params.ReviewId
    try {
      const result = await Review.findByPk(ReviewId)
      if(result){
        res.status(200).json(result)
    } else {
        throw {
            name: `NOTFOUND`,
            code: 404,
            message: `Post with id ${id} does not exists`
        }
    }
    } catch (error) {
      next(error)
    }
  }

  static async editReview(req, res, next){
    const { title, content, rating } = req.body
    const ReviewId = req.params.ReviewId
    try {
      const review = await Review.findByPk(ReviewId)
      
      
      if(review){
        const result = await Review.update({title, content, rating}, {where: {id: ReviewId}, returning: true})

        res.status(200).json(result[1][0])
      } else {
        throw {
            name: `NOTFOUND`,
            code: 404,
            message: `Post with id ${id} does not exists`
        }
    }
    } catch (error) {
      next(error)
    }
  }

  static async deleteReview(req, res, next){
    const ReviewId = req.params.ReviewId
    try {
      const review = await Review.findByPk(ReviewId)
      if(!review){
        throw {
          name: `NOTFOUND`,
          code: 404,
          message: `Post with id ${id} does not exists`
        }
      }

      await Review.destroy({where : {id: ReviewId}})
      res.status(200).json({message: `Post has been deleted`})
    } catch (error) {
      next(error)
    }
  }
}


module.exports = ReviewController