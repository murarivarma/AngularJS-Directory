(function() {
    function headerCtrl($scope, lookupSvc) {
        
        $scope.cartItems = 0;
        
        $scope.brandName = "Angular Directory";
        $scope.headerURL = "app/header/header.html";
        
        $scope.navBarItems = lookupSvc.getNavBarItems();
        
        $scope.loadPage = function(data) {
            $scope.contentURL = data.templateURL;
        };
        
        $scope.$on("ITEM_ADDED", function(event, args){
            console.log(args);
            $scope.cartItems++;
        });
        
        $scope.$on("ITEM_REMOVED", function(event, args){
            console.log(args);
            $scope.cartItems--;
        });
        
    }
    angular.module("headerNavBar").controller("headerNavBarController", ["$scope", "lookupSvc", headerCtrl]);
})();