(function(){
    
    function phoneFormatterFilterFunction(){
        
        function indianPhoneFormat(input){
            var phone = input.toString();
            return phone.substring(0,5) + "-" + phone.substring(5,10);
        }
        
        function USPhoneFormat(input){
            var phone = input.toString();
            return phone.substring(0,3) + "-" + phone.substring(3,6) + "-" + phone.substring(6,10);
        }
        
        return function(input, criteria){
         
            if(input && input.toString().length == 10){
                
                if(criteria == 'IN'){
                    return indianPhoneFormat(input);
                } else {
                    return USPhoneFormat(input);
                }
                
            }
            
            return input;
            
        }//end of return
        
    }
    
    angular.module("customFilter").filter("phoneFormatter", phoneFormatterFilterFunction);
})();