'use strict'
appVector.controller('grupoController', ["$scope", "GrupoService",
  function ($scope, GrupoService) {
    $scope.grupo = {
      id: null,
      nombre: null
    };
    console.log("Consumir servicio");
    GrupoService.list().then(function (value) {
      $scope.grupos = value.data;
    }, function (reason) {
      console.log("error occured");
    }, function (value) {
      console.log("no callback");
    });
    $scope.resetGrupo = function () {
      $scope.grupo = {
        id: null,
        nombre: null
      };
    }
    $scope.saveGrupo = function () {
      GrupoService.create($scope.grupo).then(function () {
        GrupoService.list().then(function (value) {
          $scope.grupos = value.data;
          console.log($scope.grupos);
        }, function (reason) {
          console.log("error occured");
        }, function (value) {
          console.log("no callback");
        });
        $scope.grupo = {
          id: null,
          nombre: null
        };
      }, function (reason) {
        console.log("error occured");
      }, function (value) {
        console.log("no callback");
      });
    }
  }
]);