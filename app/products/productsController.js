(function(){
    
    function productsCtrlFunction($scope, productsSvc){
        
        //$scope.productsList = productsSvc.getproducts();
        
        productsSvc.getproductsFromAPI().then(function(response){
            $scope.productsList = response.data.products;
        }).catch(function(errorResponse){
            $scope.showError = true;
        });
    }
    
    angular.module("products").controller("productsCtrl", ["$scope", "productsSvc", productsCtrlFunction]);
})();