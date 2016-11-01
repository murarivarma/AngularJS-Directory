(function() {
    function headerCtrl($scope) {
        $scope.brandName = "Angular Directory";
        $scope.headerURL = "app/header/header.html";
        
        $scope.navBarItems = [{
            name: "Home",
            templateURL: "app/home/home.html"
        },{
            name: "Login",
            templateURL: "app/login/login.html"
        },{
            name: "Register",
            templateURL: "app/register/register.html"
        }];
        
        $scope.loadPage = function(data) {
            $scope.contentURL = data.templateURL;
            $scope.class = "active";
        }
    }
    angular.module("headerNavBar", []).controller("headerNavBarController", ["$scope", headerCtrl]);
})();