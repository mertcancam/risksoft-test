const keys = require('./src/keys')
const pg = require('pg')
pg.defaults.ssl = true

module.exports = {

  development: {
    client: 'pg',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  },

  staging: {
    client: 'pg',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  },

  production: {
    client: 'pg',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  }

};
