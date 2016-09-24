myApp.controller('homeCtrl',['$scope','testService','testHttpService','fileReader',function ($scope,testService,testHttpService,fileReader) {
    console.log(testService)
    $scope.text='Home的文字';
    $scope.name=testService.name;

    $scope.getData=testHttpService.getData  ;
    $scope.searchStr='default'




    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
                $scope.imageSrc = result;
                var postData = {
                    vacationType: $scope.leave.type,
                    reason: $scope.leave.reason,
                    familyRelation: +$scope.leave.type == 7 ? $scope.leave.relation : "",
                    startTime: startTime,
                    endTime: endTime,
                    fileName: $scope.imageSrc,
                    workDelivers: workDelivers,
                    ccmailNickNames: sendPersons,
                    realDays: +$scope.leave.type == 8 ? $scope.leave.timeLong : ""
                };
                var promise = postMultipart('/maldives/leave/save', postData);

                function postMultipart(url, data) {
                    var fd = new FormData();
                    angular.forEach(data, function(val, key) {
                        fd.append(key, val);
                    });
                    var args = {
                        method: 'POST',
                        url: url,
                        data: fd,
                        headers: {'Content-Type': undefined},
                        transformRequest: angular.identity
                    };
                    return $http(args);
                }
            });
    };


}])