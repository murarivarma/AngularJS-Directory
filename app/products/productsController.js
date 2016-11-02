(function(){
    
    function productsCtrlFunction($scope, productsSvc){
        
        $scope.productsList = productsSvc.getproducts();
        
    }
    
    angular.module("products").controller("productsCtrl", ["$scope", "productsSvc", productsCtrlFunction]);
})();