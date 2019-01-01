const config = require('./src/config/config')

module.exports = {

  development: {
    client: 'postgresql',
    connection: config.db.POSTGRES_URI,
    pool: {
      min: 2,
      max: 10
    }
  },

  staging: {
    client: 'postgresql',
    connection: config.db.POSTGRES_URI,
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: config.db.POSTGRES_URI,
    pool: {
      min: 2,
      max: 10
    }
  }

};
