const keys = require('./keys')

// Redis Client Setup
const redis = require('redis');
module.exports = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});