const axios = require(`axios`)

class TranslateController{
  static async translate(req, res, next){
    const { text } = req.body
    const tl = `id`
    const sl = `en`
    const host = `google-translate20.p.rapidapi.com`
    try {
      const result = await axios({
        method: `POST`,
        url: `https://google-translate20.p.rapidapi.com/translate`,
        headers: {
          'x-rapidapi-host': host,
          'x-rapidapi-key': process.env.TRANSLATE_KEY
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