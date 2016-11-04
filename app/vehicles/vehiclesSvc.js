(function(){
    
    function vehiclesSvcFunction($q, $http){
        
        this.getVehiclesDataFromAPI = function(){
            
            var dfd = $q.defer();
            
            $http.get("app/api/vehicles.json").then(function(res){
                dfd.resolve(res);
            }).catch(function(res){
                dfd.reject(res);
            });
            
            return dfd.promise;
            
        };
    }
    
    angular.module("vehicles").service("vehiclesService", ["$q", "$http", vehiclesSvcFunction]);
})();