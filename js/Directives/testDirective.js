myApp.directive('testDirective',function(){
    return {
        //独立的scope
        scope:true,
        restrict:'E',
        replace:true,
        template:'<div>' +
                    '{{text}}:::{{name}}' +
                    '<input type="text" ng-model="searchStr" />' +
                '</div>',
        controller:'homeCtrl',
        link:function(scope,element,attrs){
            element.bind('click',function(){
               scope.getData(scope.searchStr,function(res){
                   console.log(res)
               })
            });
        }
    }
});