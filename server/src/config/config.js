module.exports = {
  db: {
    POSTGRES_URI: process.env.POSTGRES_URI
  },
  rd: {
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}