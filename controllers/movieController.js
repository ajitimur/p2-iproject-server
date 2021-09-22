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
    //  console.log(`haloo`);
     const result = await axios({
       method: `GET`,
       url: `${url}&query=${query}&page=${page}`
      })
    
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

 static async findById(req, res, next){
   const url = process.env.TMDB_SEARCH_ID
   const MovieId = req.params.MovieId
   const key = process.env.FIND_KEY
   try {
     const result = await axios({
       method: `GET`,
       url: `${url}/${MovieId}?api_key=${key}`
      })
      const movie = result.data
      const searchQuery = movie.original_title.split(` `).join(`%20`)

     

      const videoId = await axios({
        method: `GET`,
        url: `https://youtube-advanced-search.p.rapidapi.com/video/${searchQuery}`,
        headers: {
          'x-rapidapi-host': `youtube-advanced-search.p.rapidapi.com`,
          'x-rapidapi-key': process.env.RAPID_API_KEY
        }
      })
      
      const videoIdQuery = videoId.data.Data[0].video_id
      
      movie.trailerLink = `https://www.youtube.com/embed/${videoIdQuery}`
     
     res.status(200).json(movie)
   } catch (error) {
     next(error)
   }
 }
}


module.exports = MovieController