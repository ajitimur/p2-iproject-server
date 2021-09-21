const { User, Review } = require(`../models`)
const axios = require(`axios`)

class MovieController {
 static async getPopular(req, res, next){
  const { page:paramPage } = req.query;
  const tmdbUrl = process.env.tmdbUrl
  const page = paramPage ? paramPage : 1;
  try {
    const result = await axios({
      method: `GET`,
      url: `${tmdbUrl}&page=${page}`
    })
    // console.log(result.data);
    
     if(!result.data){
      throw{
        name: `NOTFOUND`,
        code: 404,
        message: `Not Found`
      }
    }

    res.status(200).json(result.data)
   } catch (error) {
     next(error)
   }
 }

 static async searchMovie(req, res, next){
   const url = process.env.tmdb_SEARCH_URL;
   const { page:paramPage, query } = req.query;
   const page = paramPage ? paramPage : 1;
   try {
     const result = await axios({
       method: `GET`,
       url: `${url}&query=${query}&page=${page}`
      })
      // console.log(result.data);
    
     if(!result){
      throw{
        name: `NOTFOUND`,
        code: 404,
        message: `Not Found`
      }
    }

    res.status(200).json(result.data)
   } catch (error) {
    next(error)
   }
 }
}


module.exports = MovieController