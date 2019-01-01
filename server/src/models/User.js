'use strict';

const Model = require('objection').Model;
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user) {
  
  const SALT_FACTOR = 8

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.password = hash;
    })
}

class User extends Model {
  static get tableName () {
    return 'users'
  }

  $beforeInsert() {
    hashPassword(this);
  }

  $beforeUpdate() {
    hashPassword(this);
  }
  
}

User.prototype.comparePassword = function (password) {
    
  return bcrypt.compareAsync(password, this.password)
}

module.exports = User;