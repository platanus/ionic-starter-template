angular.module('app.directives')

.directive("turnBlue", function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.css({color: 'blue'});
    }
  }
})