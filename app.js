
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mainController = require('./controllers/maincontroller.js');
var quizController = require('./controllers/quizcontroller.js');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', mainController.index);
app.get('/search', mainController.search);
app.get('/quiz', quizController.index);
app.get('/quiz/start', quizController.start);
app.get('/check', quizController.check);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
