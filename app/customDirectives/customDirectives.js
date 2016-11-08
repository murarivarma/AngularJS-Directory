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
        }
    }
    
    
    angular.module("customDirective",[]);
    angular.module("customDirective",[]).directive("customLogo",[customLogoFunction])
    .directive("customHeader", [customHeaderFunction]);
})();