myApp.controller('homeCtrl',['$scope','testService','testHttpService',function ($scope,testService,testHttpService) {
    console.log(testService)
    $scope.text='Home的文字';
    $scope.name=testService.name;

    $scope.getData=testHttpService.getData  ;
    $scope.searchStr='default'
}])