angular.module("LargeTraders").directive("largeTraderSymbol",['$compile',function($compile){
    return {
        scope: {

        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-symbol.html",
        replace: true,
        link:function(scope, element, attrs){
            angular.element(document).ready(function(){

                /*
                 Controller for the checkbox to enable or disable the input forms
                 when toggled.
                 */
                angular.element("#symbolCheck").on("change",function(){
                    if (this.checked){
                        angular.element(".symbolText").attr("disabled","disabled");
                        angular.element("#symbolAdd").attr("disabled","disabled");
                    }
                    else{
                        angular.element(".symbolText").removeAttr("disabled");
                        angular.element("#symbolAdd").removeAttr("disabled");
                    }
                });

                angular.element("#symbolAdd").on("click",function(){
                    var template="<input type=\"text\" name=\"symbolText[]\" class=\"symbolText form-control\" placeholder=\"Enter Symbol\">";
                    var dynamicElement=$compile(template)(scope);
                    element.find(".dynamic-container").append(dynamicElement);
                });
            });
        }
    }
}]);