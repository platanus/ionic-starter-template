angular.module('app.models')

  .factory('Post', function(restmod) {
    return restmod.model('/posts');
  });
