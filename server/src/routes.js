const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const Auth = require('./middlewares/authentication')

module.exports = (app) => {
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)

  app.post('/login',
  AuthenticationController.login)

}