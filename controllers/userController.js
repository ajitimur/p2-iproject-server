const { User, Review } = require(`../models`)
const { decode } = require(`../helpers/bcrypt.js`)
const { signIn } = require(`../helpers/jwt.js`)
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);



class UserController {
  static async register(req, res, next){
    const { email, password, username } = req.body
    try {
      const user = await User.create({ email, password, username })
      res.status(201).json({
        id: user.id,
        email: user.email,
        username: user.username
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next){
    const {email, password} = req.body
    try {
      const user = await User.findOne({where: {email}})
      if(user){
        const isValid = decode(password, user.password)
        // console.log(isValid);
        if(isValid){
          // console.log(`woyyy`);
            const access_token = signIn({
                id: user.id,
                email: user.email,
                username: user.username
            });
            res.status(200).json({access_token})
        } else {
            
            throw{
                name: `WrongCredentials`,
                code: 401,
                message: `Email / Password is wrong`
            }    
        }
    } else {
        
        throw{
            name: `WrongCredentials`,
            code: 401,
            message: `Email / Password is wrong`
        }  
    }
    } catch (error) {
      next(error)
    }
  }

  static async googleLogin(req, res, next){
    try {
      let idToken = req.body.idToken
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENTID, 
      });
      // console.log(ticket);
      const payload = ticket.getPayload()
      // console.log(payload, `=============`);
      // res.status(200).json(payload)
      let { email } = payload
      let username = payload.given_name + payload.family_name
      let password = payload.at_hash
      
    
      let user = await User.findOrCreate({
        where: {
          email
        },
        defaults: {
          username,
          password,
        }
      })

      
      const access_token = signIn({
        id: user[0].dataValues.id,
        username: user[0].dataValues.username,
        email: user[0].dataValues.email,
        
    });
    // console.log(accessToken);
    res.status(200).json({access_token})
      
    } catch (error) {
      next(error)
    }
  }
}


module.exports = UserController