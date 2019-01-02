const keys = require('./src/keys')

module.exports = {

  development: {
    client: 'postgresql',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  },

  staging: {
    client: 'postgresql',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  },

  production: {
    client: 'postgresql',
    connection: keys.POSTGRES_URI,
    pool: {
      min: 2,
      max: 1000
    }
  }

};
