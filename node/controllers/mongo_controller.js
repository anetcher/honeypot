var dbInfo = require('./db_info.json');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var insertDocument = function(db, collection, document, callback){
  db.collection(collection).insert(document, function(err, result){
    assert.equal(err, null);
    callback(result);
  });
};

var findDocument = function(db, collection, query, callback){
  db.collection(collection).findOne(query, function(err, doc){
    assert.equal(err, null);
    callback(doc);
  });
};

var findDocuments = function(db, collection, query, callback){
  db.collection(collection).find(query).toArray(function(err, docs){
    assert.equal(err, null);
    callback(docs);
  });
};

module.exports.insertArticle = function(document){
    MongoClient.connect(dbInfo.url.local + dbInfo.database.honeypot, function(err, db){
      assert.equal(err, null);
      insertDocument(db, dbInfo.collection.articles, document, function(){
        db.close();
      });
    });
};

module.exports.findArticle = function(query, callback){
  MongoClient.connect(dbInfo.url.local + dbInfo.database.honeypot, function(err, db){
    assert.equal(err, null);
    findDocument(db, dbInfo.collection.articles, query, function(doc){
      db.close();
      callback(doc);
    });
  });
};

module.exports.findArticles = function(query, callback){
  MongoClient.connect(dbInfo.url.local + dbInfo.database.honeypot, function(err, db){
    assert.equal(err, null);
    findDocuments(db, dbInfo.collection.articles, query, function(docs){
      db.close();
      callback(docs);
    });
  });
};
