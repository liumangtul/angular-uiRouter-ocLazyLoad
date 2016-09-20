myApp.directive('testDirective',function(){
    return {
        //独立的scope
        scope:{},
        restrict:'E',
        replace:true,
        template:'<div>{{text}}:::{{name}}</div>',
        controller:'homeCtrl',
        link:function(scope,element,attrs){

        }
    }
});