(function() {
    function headerCtrl($scope, lookupSvc) {
        $scope.brandName = "Angular Directory";
        $scope.headerURL = "app/header/header.html";
        
        $scope.navBarItems = lookupSvc.getNavBarItems();
        
        $scope.loadPage = function(data) {
            $scope.contentURL = data.templateURL;
        }
    }
    angular.module("headerNavBar").controller("headerNavBarController", ["$scope", "lookupSvc", headerCtrl]);
})();