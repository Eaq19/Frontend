'use strict'

appVector.factory('ClienteService', function($http) {
    return {
        list: function() {
          return $http.get('http://localhost:8034/api/cliente');
        },
        getByName: function(name) {
          return $http.get('http://localhost:8034/api/cliente/' + name);
        },
        //like the media
        create: function(cliente) {
          return $http.post('http://localhost:8034/api/cliente', cliente);
        }
      }
}]);