angular.module("LargeTraders").directive("largeTraderForm",[function(){
    return {
        scope: {
            tradeOptions: '='
        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-form.html",
        replace: true,
        link:function(scope, element, attrs){
            angular.element(document).ready(function(){
                element.find("#form-submit").on("click",function(e){
                    e.preventDefault();
                    var formInput=angular.element("form[name='largeTraderForm']").serializeArray();
                    scope.formOutput=JSON.stringify(formInput);
                })
            });
        }
    }
}]);