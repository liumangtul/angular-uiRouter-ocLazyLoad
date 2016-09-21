myApp.factory('testHttpService', ['$http','$timeout','$q', function($http,$timeout,$q) {
    var getPullRequests = function(searchValue,succ){
        var deferred = $q.defer();
        var promise = deferred.promise;
        $http({
            method: 'GET',
            url: '/angular-uiRouter-ocLazyLoad/json.txt?key='+searchValue
        })
            .success(function(res){
                succ(res)
            })
        return promise;
    }

    return {
        getData: function (searchValue,succ) {
            getPullRequests(searchValue,succ);
        }
    };
}]);

