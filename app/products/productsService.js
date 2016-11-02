(function(){
    
    function productsSvcFunction($q, $http){
        
//        this.getproducts = function() {
//            
//            var products = [{
//                productName: "The Perfectionist Wing Tip Full Brogue",
//                productDescription: "The Perfectionist Wing Tip Loafers feature Burnished Leather Uppers, Leather Lining and High Grade Black Tunit Sole.",
//                productPrice: "Rs. 3020",
//                productImageURL: "app/images/productImages/1.jpg"
//            }, {
//                productName: "The Urbane Black Penny Loafers",
//                productDescription: "The Urbane Black Penny Loafers feature Burnished Black Leather Uppers, Tan Leather Lining and High Grade Black Tunit Sole.",
//                productPrice: "Rs. 3360",
//                productImageURL: "app/images/productImages/2.jpg"
//            }, {
//                productName: "The Sublime Tan Tapered Loafers",
//                productDescription: "The Sublime Two Tone Tan Tapered Loafers features Tan Burnished Leather Uppers, Tan Leather Lining with Natural High Grade Tunit Sole and Stacked Heel.",
//                productPrice: "Rs. 3690",
//                productImageURL: "app/images/productImages/3.jpg"
//            }, {
//                productName: "The Debonair Brown Brogue Loafers",
//                productDescription: "The Debonair Brown Brogue Loafers features Dark Brown Burnished Leather Uppers, Black Leather Lining and High Grade Tunit with Brushed Effect around Heel.",
//                productPrice: "Rs. 3470",
//                productImageURL: "app/images/productImages/4.jpg"
//            }, {
//                productName: "The Charmer Navy Tasseled Loafer",
//                productDescription: "The Charmer Navy Tasseled Suede Loafer features Navy Suede Uppers, Tan Leather Lining and Natural High Grade Tunit Sole with Stacked Heel.",
//                productPrice: "Rs. 3240",
//                productImageURL: "app/images/productImages/5.jpg"
//            }, {
//                productName: "The Valiant Cap Toe Side Lace Oxford",
//                productPrice: "Rs. 3100",
//                productDescription: "The Valiant Cap toe Side Lace Oxford features Dark Brown Leather Uppers, Black Leather Lining with High Grade Tunit Sole with a Criss Cross Texture.",
//                productImageURL: "app/images/productImages/6.jpg"
//            }];
//            return products;
//        };
        
        this.getproductsFromAPI = function(){
          
            var dfd = $q.defer();
            $http.get("app/api/products.json").then(function(res){
                dfd.resolve(res);
            }).catch(function(response){
                dfd.reject(response);
            });
            
            
            return dfd.promise;
            
            
        };
        
    }
    
    angular.module("products").service("productsSvc", ["$q","$http", productsSvcFunction]);
})();