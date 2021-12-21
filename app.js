require('dotenv').config()

const jwt = require("jsonwebtoken");

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
const clientRqsRouter = require('./apis/client-requests')

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
app.use('/api/v1/auth',authRouter);

app.use(verifyToken)

app.use('/api/v1/common', commonRouter);
app.use('/api/v1/client/rq/',clientRqsRouter);

app.use(verifyAdmin)
app.use('/api/v1/bonus',bonusRouter);
app.use('/api/v1/devis',devisRouter);
app.use('/api/v1/clients',clientsRouter);
app.use('/api/v1/test',testRouter);


app.use(
  "/",
  express.static(path.join(__dirname, "public"), {
    etag: false,
  })
);

app.all("*", (req, res) => {

    res.sendFile(path.join(__dirname, "public/index.html"));

    //req.pipe(request(req.url)).pipe(res);
    //request(req.url).pipe(res);
});

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


function verifyToken(req, res, next) {
  if (req.url.substring(0, 4) === "/api") {
    // if (!req.headers.FromBrowser) {
    //   console.log("Redirect !!!!!!!");
    //   return res.status(403).redirect(301, "/");
    // }
    console.log('Hea',req.headers);
    if (!req.headers.authorization) {
      return res.status(401).send({
        message: "Unauthorized head",
      });
    }

    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        message: "Unauthorized null",
      });
    }
    let payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log('PAYLOAD :',payload);
    if (!payload) {
      return res.status(401).send({
        message: "Unauthorized payload",
      });
    }

    /* if (payload.role === "superadmin") {
      return res.status(500).send({
        message: "You are accessing a bad route go back"
      });
    } */

    //! verify the payload
    req.fullname = payload.fullname;
    req.role = payload.role;
    req.loggedId = payload.subject;
  }
  next();
}

function verifyAdmin(req, res, next) {
  if (req.url.substring(0, 4) === "/api") {
    console.log('params',req.loggedId);
    // if (!req.headers.FromBrowser) {
    //   console.log("Redirect !!!!!!!");
    //   return res.status(403).redirect(301, "/");
    // }
    if(req.role != 'admin')return res.status(401).send({
      message: "Unauthorized role",
    });
  }
  next();
}

module.exports = app;
