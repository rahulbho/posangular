var appServices = angular.module("app.services", []);

appServices.service("posService", function($http){
    this.initialiseOrder = function() {
        var url = 'http://localhost:8080/control/initialiseOrder';
        return $http.post(url);
    };

    this.viewOrderDetails = function(orderId) {
        var urlParams = 'orderId='+orderId;
        var url = 'http://localhost:8080/control/getOrderDetails?'+urlParams;
        return $http.post(url);
    };
 
    this.addItem = function(productId,orderId) {
        var urlParams = 'productId='+productId+'&orderId='+orderId;
        var url = 'http://localhost:8080/control/addItem?'+urlParams;
        return $http.post(url);
    };
   
    this.editOrderItem = function(item, orderId) {
        var urlParamString = "orderId="+orderId+"&orderItemSeqId="+item.orderItemSeqId+"&quantity="+item.quantity+"&unitPrice="+item.unitPrice;
        var url = 'http://localhost:8080/control/editOrderItem?'+urlParamString;
        return $http.post(url);
    };
 
    this.deleteOrderItem = function(item, orderId) {
        var urlParamString = "orderId="+orderId+"&orderItemSeqId="+item.orderItemSeqId;
        var url = 'http://localhost:8080/control/deleteOrderItem?'+urlParamString;
        return $http.post(url);
    }; 
});
