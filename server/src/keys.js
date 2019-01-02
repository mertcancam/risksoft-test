module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  POSTGRES_URI: process.env.POSTGRES_URI,
  jwtSecret: process.env.JWT_SECRET || 'secret'
};