var app = angular.module("app", ['app.services']);

app.controller('MainCtrl', function($scope, posService, $http) {

    $scope.initialiseOrder = function(){
        posService.initialiseOrder().then(function(resp){
            $scope.orderId = resp.data.orderId
        });
    }

    $scope.addItem = function(productId){
        posService.addItem(productId, $scope.orderId).then(function(){
            posService.viewOrderDetails($scope.orderId).then(function(resp){
              $scope.orderDetails =resp.data.orderDetails 
            })
        });
    }

    $scope.editOrderItem = function(item) {
        posService.editOrderItem(item, $scope.orderId).then(function(){
            posService.viewOrderDetails($scope.orderId).then(function(resp){
                $scope.orderDetails =resp.data.orderDetails
            })
        });
    }

    $scope.deleteOrderItem = function(item) {
        posService.deleteOrderItem(item, $scope.orderId).then(function(){
            posService.viewOrderDetails($scope.orderId).then(function(resp){
                $scope.orderDetails =resp.data.orderDetails
            })
        });
    }

});
