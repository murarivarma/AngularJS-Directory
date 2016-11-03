(function(){
    
    function productsCtrlFunction($scope, productsSvc, $rootScope){
        
        //$scope.productsList = productsSvc.getproducts();
        
        productsSvc.getproductsFromAPI().then(function(response){
            $scope.productsList = response.data.products;
        }).catch(function(errorResponse){
            $scope.showError = true;
        });
        
        
        $scope.addToCart = function(item){
            item.selected = true;
            $rootScope.$broadcast("ITEM_ADDED", {
                product: item
            });
        };
        
        $scope.removeFromCart = function(item){
            item.selected = false;
            $rootScope.$broadcast("ITEM_REMOVED", {
                product: item
            });
        };
    }
    
    angular.module("products").controller("productsCtrl", ["$scope", "productsSvc", "$rootScope", productsCtrlFunction]);
})();