(function(){

  var app = angular.module('wiki-directives', []);

  app.directive('wiki', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/wiki/wiki.html'
    };
  });

  app.directive('wikiWriteForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/wiki/wiki-write-form.html'
    };
  });

  app.directive('wikiListView', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/wiki/wiki-list-view.html'
    };
  });

})();
