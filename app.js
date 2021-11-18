var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");


const indexRouter = require('./apis/index');
const commonRouter = require('./apis/common');
const clientsRouter = require('./apis/clients');
const testRouter = require('./apis/test')
const authRouter = require('./apis/auth')
const devisRouter = require('./apis/devis')
const bonusRouter = require('./apis/bonus')

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/common', commonRouter);
app.use('/api/v1/clients',clientsRouter);
app.use('/api/v1/test',testRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/devis',devisRouter);
app.use('/api/v1/bonus',bonusRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
