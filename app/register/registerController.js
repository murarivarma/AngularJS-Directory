(function() {
    
    function registerCtrlAction($scope, lookupSvc) {
        $scope.user = {};
        
        //$scope.countries = lookupSvc.getCountriesList();
        
        lookupSvc.getCountriesListFromAPI().then(function(response){
            $scope.countries = response.data.countries;
        }).catch(function(errorResponse){
            console.log(errorResponse);
        });
        
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