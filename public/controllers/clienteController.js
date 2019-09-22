'use strict'
appVector.controller('clienteController', ["$scope", "ClienteService", "GrupoService",
  function ($scope, ClienteService, GrupoService) {
    $scope.cliente = {
      id: null,
      nombre: null,
      cif: null,
      direccion: null,
      grupo: null
    };
    $scope.grupos = {
      id: null,
      nombre: null
    };
    $scope.clienteSearch = null;
    console.log("Consumir servicio");
    GrupoService.list().then(function (value) {
      $scope.grupos = value.data;
    }, function (reason) {
      console.log("error occured");
    }, function (value) {
      console.log("no callback");
    });
    ClienteService.list().then(function (value) {
      $scope.allCustomers = value.data;
    }, function (reason) {
      console.log("error occured");
    }, function (value) {
      console.log("no callback");
    });
    $scope.resetCliente = function () {
      $scope.cliente = {
        id: null,
        nombre: null,
        cif: null,
        direccion: null,
        grupo: null
      };
    }
    $scope.saveCliente = function () {
      $scope.cliente.grupo = { id: $scope.cliente.grupo }
      ClienteService.create($scope.cliente).then(function () {
        ClienteService.list().then(function (value) {
          $scope.allCustomers = value.data;
        }, function (reason) {
          console.log("error occured");
        }, function (value) {
          console.log("no callback");
        });
        $scope.cliente = {
          id: null,
          nombre: null,
          cif: null,
          direccion: null,
          grupo: null
        };
      }, function (reason) {
        console.log("error occured");
      }, function (value) {
        console.log("no callback");
      });
    }
    $scope.searchCliente = function () {
      console.log("Buscador:" + $scope.clienteSearch);
      ClienteService.getByName($scope.clienteSearch).then(function (value) {
        $scope.allCustomers = value.data;
      }, function (reason) {
        console.log("error occured");
      }, function (value) {
        console.log("no callback");
      });
    }
  }
]);