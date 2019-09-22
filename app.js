var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var customersRouter = require('./routes/customers');
var listCustomersRouter = require('./routes/listClientes');
var groupsRouter = require('./routes/groups');
var listGroupssRouter = require('./routes/listGrupos');
var layoutRouter = require('./routes/layout');
var grupoRouter = require('./routes/grupo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/customers', customersRouter);
app.use('/groups', groupsRouter);
app.use('/layout', layoutRouter);
app.use('/listClientes', listCustomersRouter);
app.use('/listGrupos', listGroupssRouter);
app.use('/grupo', grupoRouter);
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
  res.render('templates/error');
});

module.exports = app;
