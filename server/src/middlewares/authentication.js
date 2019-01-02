const redis = require("redis")
const config = require('../config/config')
redisClient = redis.createClient({ host: config.rd.REDIS_HOST});

requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if(!authorization) {
    return res.status(401).json('Unauthorized');
  }
  return redisClient.get(authorization, (err, reply) => {
    if(err || !reply) {
      return res.status(401).json('Unauthorized');
    }
    
    return next();
  })
}

module.exports = { requireAuth }