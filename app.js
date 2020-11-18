var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/authRoute')
const loginRouter = require('./routes/authRoute')
require('./models/User')


var app = express();

const db = 'mongodb://localhost:27017/rfq'
mongoose.connect(db, { useUnifiedTopology: true, useCreateIndex:true, useNewUrlParser: true })
mongoose.connection.on('error', err => debug(`MongoDB connection error: ${err}`));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())


app.use('/api', indexRouter);
app.use('/api', signupRouter)
app.use('/api', loginRouter)

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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
