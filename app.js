const app = require('express')();
require('./config/passport')();
require('./config/express')(app);

const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/user')
app.use('/', user);

require('./config/error-handler')(app);

module.exports = app;
