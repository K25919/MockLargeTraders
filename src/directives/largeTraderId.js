angular.module("LargeTraders").directive("largeTraderId",['$compile',function($compile){
    return {
        scope: {

        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-id.html",
        replace: true,
        link:function(scope, element, attrs){
            angular.element(document).ready(function(){

                /*
                Controller for the checkbox to enable or disable the input forms
                when toggled.
                 */
                angular.element("#ltidCheckBox").on("change",function(){
                    if (this.checked){
                        angular.element(".ltidText").attr("disabled","disabled");
                        angular.element("#ltidAdd").attr("disabled","disabled");
                    }
                    else{
                        angular.element(".ltidText").removeAttr("disabled");
                        angular.element("#ltidAdd").removeAttr("disabled");
                    }
                });

                angular.element("#ltidAdd").on("click",function(){
                    var template="<input type=\"text\" name=\"ltidText[]\" class=\"ltidText form-control\" placeholder=\"Enter Ltid#\">";
                    var dynamicElement=$compile(template)(scope);
                    element.find(".dynamic-container").append(dynamicElement);
                });
            });


        }
    }
}]);