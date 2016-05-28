var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var assert = require('assert');

// Serve static files
app.use(express.static('public'));

// For using post : request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Call page_route module
var pageRoute = require('./node/routes/page_route')(express);
app.use('/', pageRoute);

app.use('/wiki/', require('./node/routes/wiki_route'));



app.post('/write_receiver', function(req, res){
  var title = req.body.title;
  var text = req.body.text;
  res.send(title + ',' + text);

});

var mongoController = require('./node/controllers/mongo_controller');
//mongoController.insertArticle();

/*
mongoController.findArticles({}, function(articles){
  console.log(articles);
});

mongoController.findArticle({ title : "test title3" }, function(article){
  console.log(article);
});
*/

// Server listen
app.listen(3000, function(){
  console.log('Conntected 3000 port!');
});
