(function(){
    
    function customLogoFunction(){
        return {
            template:'<a href="#" class="navbar-brand">{{brandName}}</a>',
            restrict:"A,E,C"
        };
    }
    
    function customHeaderFunction(){
        return {
            templateUrl:"app/customDirectives/customHeader.html",
            restrict:"A"
        };
    }
    
    function customClickFunction(){
        return {
            restrict:"A",
            link: function(scope, element, attrs){
                
                element.bind("click", function(){
                    var fun = attrs["customClick"];
                    scope.$eval(fun);
                });
                
            }
        };
    }
    
    function customNumbersOnlyFunction(){
        return {
           
            restrict:"A",
            link: function(scope, element, attrs){
                
                element.bind("keypress", function(e){
                   
                    var allowedLength = attrs["customLength"];
                    //console.log(allowedLength);
                    
                    if(e.charCode >= 48 && e.charCode <= 57 && this.value.length < allowedLength) {
                        
                    } else {
                        e.preventDefault();
                    }
                    
                });
                
            }
            
        };
    }
    
    
    angular.module("customDirective",[]);
    angular.module("customDirective",[])
        .directive("customLogo",[customLogoFunction])
        .directive("customHeader", [customHeaderFunction])
        .directive("customClick", [customClickFunction])
        .directive("customNumbersOnly", [customNumbersOnlyFunction]);
})();