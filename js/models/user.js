angular.module('app.models')
  .factory('User', function(restmod) {
    return restmod.model('/mobile_users').mix('HttpAuth');
  });
