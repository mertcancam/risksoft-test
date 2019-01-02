const jwt = require('jsonwebtoken')
const config = require('../config/config')
const User = require('../models/User')
const redis = require("redis")

// Setup redis:

redisClient = redis.createClient({ host: config.rd.REDIS_HOST});

const setToken = (key, value) => {

  // WRITE NEW PROMISE AND HANDLE REJECTION
  
  return Promise.resolve(redisClient.set(key, value))
}

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;
  
  return redisClient.get(authorization, (err, reply) => {
    if(err || !reply) {
      return res.status(400).json('Unauthorized')
    }
    return res.json({id: reply})
  })
}

const jwtSignUser = async (user) => {
  
  const ONE_WEEK = 60 * 60 * 24 * 2
  const token = jwt.sign({email: user.email}, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })

  const result = await setToken(token, user.id);

  return (result) ? {userId: user.id, token} : {error: 'Something went wrong'}

}

const handleLogin = async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json('You are not logged in!')
    }
    
    const user = await User.query().findOne({email});

    if (!user) {
      return res.status(403).send({
        error: 'The login information was incorrect'
      })
    }

    const isPasswordValid = await user.comparePassword(password)

    if (!isPasswordValid) {
      return res.status(403).send({
        error: 'The login information was incorrect'
      })
    }

    const userJson = user.toJSON()
    const response = await jwtSignUser(userJson);
    
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    
  }
  
}

module.exports = {
  async register (req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.query().insert({email, password})
      const userJson = user.toJSON()
      
      res.status(200).json(userJson.id);
      
    } catch (err) {
      console.log(err);
      
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { authorization } = req.headers;
      
      return (!!authorization) ? getAuthTokenId(req, res) : handleLogin(req, res);

    } catch (err) {
      console.log(err);
      
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}