angular.module('app', 
  [
    'app.env',
    'ionic', 
    'restmod',
    'app.controllers', 
    'app.directives',
    'app.models',
    'app.services', 
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    console.log('Platanus');

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

});

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.models', []);
angular.module('app.services', []);
