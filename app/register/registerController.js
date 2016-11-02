(function() {
    
    function registerCtrlAction($scope, lookupSvc) {
        $scope.user = {};
        
        $scope.countries = lookupSvc.getCountriesList();
        
        $scope.loadStatesByCountry = function(){
          var countryCode = $scope.user.country.code;
          $scope.statesList = getStateByCountry(countryCode);
        };
        
        function getStateByCountry(code) {
            var stateList = _.where(lookupSvc.getStatesListOfCountry(), {
                countryCode: code
            });
            
            return stateList;
        }
        
        $scope.register = function(){
            console.log($scope.user);
        };
    }
    
    angular.module("register").controller("registerCtrl", ["$scope", "lookupSvc", registerCtrlAction]);
})();