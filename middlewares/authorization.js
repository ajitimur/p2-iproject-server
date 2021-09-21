const { Review } = require(`../models`)

const authorization = async (req, res, next) => {
  const UserId = +req.user.id;
  const id = +req.params.ReviewId
  try {
    const review = await Review.findByPk(id)

    if(!review){
      throw {
          name:`PostNotFound`
      }
    }
    // console.log(UserId, review, `<<<<<<<<<<<`);

    if(review.UserId !== UserId){
      throw {
        name: `Forbidden`,
        code: 403,
        message: `Access Forbidden`
    }
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authorization