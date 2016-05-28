(function(){

  var app = angular.module('wiki-controller', []);

  app.controller('WikiController', function($http){
    $scope = this;
    this.article = {};
    this.articles = [];

    this.submit = function(){
      if (this.article.title != undefined && this.article.content != undefined){
        $http.post('/wiki/write', this.article).then(
          function successCallback(res){
            console.log(res.status);
          },
          function errorCallback(res){
            console.log(res.status);
          }
        );
      }
    };

    this.refresh = function(){
      $http.post('/wiki/read').then(
        function successCallback(res){
          $scope.articles = res.data;
          console.log(res.status);
        },
        function errorCallback(res){
          console.log("ERROR : " + res.status);
        }
      );
    };

  });

})();
