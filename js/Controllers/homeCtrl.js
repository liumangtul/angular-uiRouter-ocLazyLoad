myApp.controller('homeCtrl',['$scope','testService',function ($scope,testService) {
    console.log(testService)
    $scope.text='Home的文字';
    $scope.name=testService.name;
}])