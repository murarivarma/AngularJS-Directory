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
    
    
    angular.module("customDirective",[]);
    angular.module("customDirective",[])
        .directive("customLogo",[customLogoFunction])
        .directive("customHeader", [customHeaderFunction])
        .directive("customClick", [customClickFunction]);
})();