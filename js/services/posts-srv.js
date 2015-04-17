angular.module('app.services')

.factory('PostsSrv', function(Post){
  var service = {
    getPosts: function(){
      // On a real-world app, with Restmod connected to a server, you should do:
      // return Post.$collection().$fetch();
      return [
        { id: 1, author: 'José', message: 'Lorem ipsum dolor sit amet.' },
        { id: 2, author: 'Rick', message: 'Lorem ipsum dolor sit amet.' },
        { id: 3, author: 'Thomas', message: 'Lorem ipsum dolor sit amet.' },
        { id: 4, author: 'Louise', message: 'Lorem ipsum dolor sit amet.' },
        { id: 5, author: 'Sebastian', message: 'Lorem ipsum dolor sit amet.' }
      ];
    }
  };

  return service;
});