// wiki/
module.exports = (function(){
  var route = require('express').Router();
  //var bodyParser = require('body-parser');
  var mongoController = require('../controllers/mongo_controller');

  route.get('/', function(req, res){
    // Article view
  });

  // Form Routes
  route.get('/views/article', function(req, res){
    // Article view
  });
  route.get('/views/list', function(req, res){
    // List view
  });
  route.get('/forms/write', function(req, res){
    // Write form
  });
  route.get('/forms/modify', function(req, res){
    // Modify form
  });

  // CRUD Routes
  route.post('/write', function(req, res){
    // Create
    var article = {
      title : req.body.title,
      content : req.body.content
    };
    mongoController.insertArticle(article);
  });

  route.post('/read', function(req, res){
    // Read
    mongoController.findArticles({}, function(articles){
      res.json(articles);
    });

  });

  route.post('/modify', function(req, res){
    // Update
  });

  route.post('/delete', function(req, res){
    // Delete
  });

  return route;
})();
