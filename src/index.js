const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
// const favicon = require('serve-favicon');

const graphqlMiddleware = require('./middlewares/graphql');
const api = require('./routes/api');
const index = require('./routes/index');
const playground = require('./routes/playground');

const app = express();
app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false,
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', graphqlMiddleware);

app.use('/api/v1', api);
if (process.env.PLAYGROUND === 'true') {
  app.use('/blog', playground);
}

app.use('/', index);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
