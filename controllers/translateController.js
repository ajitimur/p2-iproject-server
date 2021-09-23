const axios = require(`axios`)

class TranslateController{
  static async translate(req, res, next){
    const { text, tl, sl } = req.body
    // console.log(req.body, `<<<<<<<<<`);
    const host = `google-translate20.p.rapidapi.com`
    try {
      const result = await axios({
        method: `POST`,
        url: `${process.env.TRANSLATE_URL}`,
        headers: {
          'x-rapidapi-host': host,
          'x-rapidapi-key': process.env.RAPID_API_KEY
        },
        data: {
          text,
          tl,
          sl
        }
      })
      // console.log(result.data);
      res.status(200).json(result.data.data.translation)
    } catch (error) {
      next(error)
    }
  }
}


module.exports = TranslateController