'use strict'

appVector.factory('GrupoService', function($http) {
    return {
        list: function() {
          return $http.get('http://localhost:8034/api/grupo');
        },
        create: function(group) {
          return $http.post('http://localhost:8034/api/grupo', group);
        }
      }
});