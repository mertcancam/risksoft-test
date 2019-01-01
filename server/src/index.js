const Knex = require('knex');
const express = require('express')
//const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const knexConfig = require('../knexfile');
const { Model } = require('objection');

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

const app = express()
app.use(morgan('combined'))
//app.use(helmet())
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

const server = app.listen(8081, () => {
  console.log('Example app listening at port %s', server.address().port);
});
