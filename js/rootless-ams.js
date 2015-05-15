angular.module('restmod').factory('RootlessAMSApi', ['restmod', 'inflector', function(restmod, inflector) {

  return restmod.mixin({ // include default packer extension
    $config: {
      style: 'RootlessAMSApi',
      primaryKey: 'id',
      jsonMeta: 'meta',
      jsonLinks: 'links'
    },

    $extend: {
      // special snakecase to camelcase renaming
      Model: {
        decodeName: inflector.camelize,
        encodeName: function(_v) { return inflector.parameterize(_v, '_'); }
      }
    }
  });

}]);
