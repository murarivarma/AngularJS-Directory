(function(){
    
    function vehiclesCtrlFunction($scope, vehiclesService){
        
        $scope.recordCount = 4;
        
        vehiclesService.getVehiclesDataFromAPI().then(function(response){
            $scope.vehiclesData = response.data.vehicles;
        }).catch(function(error){
            $scope.showError = true;
        });
        
        $scope.showMore = function(){
            
            if($scope.recordCount < $scope.vehiclesData.length){
                $scope.recordCount += 4;
            }
        };
        
        $scope.showLess = function(){
            if($scope.recordCount > 4){
                $scope.recordCount -= 4;
            }
        };
        
        $scope.sortByPrice = function(){
          
            $scope.orderByPrice = $scope.orderByPrice == "Price" ? "-Price" : "Price";
            
        };
        
    }
    
    angular.module("vehicles").controller("vehiclesController", ["$scope","vehiclesService", vehiclesCtrlFunction]);
})();