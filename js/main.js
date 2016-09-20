var myApp = angular.module("myApp", ["oc.lazyLoad","ui.router"]);
myApp.config(
    [
        '$ocLazyLoadProvider',
        '$stateProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function (
            $ocLazyLoadProvider,
            $stateProvider,
            $controllerProvider,
            $compileProvider,
            $filterProvider,
            $provide
        ) {

    var lazyDeferred;
    /*$ocLazyLoadProvider.config({
        debug:true,
        events:true,
        modules:[]
    });*/
            myApp.controller    =   $controllerProvider.register;
            myApp.directive     =   $compileProvider.directive;
            myApp.filter        =   $filterProvider.register;
            myApp.factory       =   $provide.factory;
            myApp.service       =   $provide.service;
            myApp.constant      =   $provide.constant;

    $ocLazyLoadProvider.config({
        loadedModules: ["oc.lazyLoad","ui.router"],//主模块名,和ng.bootstrap(document, ['monitorApp'])相同
        //jsLoader: requirejs, //使用requirejs去加载文件
        //files: ['modules/summary','modules/appEngine','modules/alarm','modules/database'], //主模块需要的资源，这里主要子模块的声明文件
        debug: true
    });

    $stateProvider
        .state('indexState', {
            url: "", // root route
            views: {
                "homeView": {
                    templateUrl: 'tpls/home.html',
                    controller: 'homeCtrl', // This view will use AppCtrl loaded below in the resolve
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                /*testService:['$ocLazyLoad', '$templateCache', '$q','$injector','$stateParams', function($ocLazyLoad,$templateCache,$q,$injector,$stateParams) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myApp',
                        cache: false,
                        files: ['js/Services/testService.js']
                    }).then(function() {
                        // $q.defer().resolve($templateCache.get('tpls/home.html'));
                    });
                }],*/
                homeCtrl: ['$ocLazyLoad', '$templateCache', '$q','$injector','$stateParams', function($ocLazyLoad,$templateCache,$q,$injector,$stateParams) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myAppHomeTest',
                        cache: false,
                        files: ['js/Controllers/homeCtrl.js','js/Services/testService.js','js/Directives/testDirective.js']
                    }).then(function() {
                       // $q.defer().resolve($templateCache.get('tpls/home.html'));
                    });
                }]
            }
        })
        .state('indexState.childState1', {
            url: "/child1", // root route
            views: {
                "childView": {
                    templateUrl: 'tpls/child1.html',
                    controller: 'childCtrl1', // This view will use AppCtrl loaded below in the resolve
                },
                "childView.childView1": {
                    templateUrl: 'tpls/child11.html',
                    controller: 'childCtrl11', // This view will use AppCtrl loaded below in the resolve
                },
                "childView.childView2": {
                    templateUrl: 'tpls/child12.html',
                    controller: 'childCtrl12', // This view will use AppCtrl loaded below in the resolve
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                childCtrl: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad,$templateCache,$q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myApp',
                        cache: false,
                        files: ['js/Controllers/childCtrl1.js']
                    }).then(function() {
                        //  $q.defer().resolve($templateCache.get('tpls/child.html'));
                    });
                }],
                childCtrl1: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad,$templateCache,$q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myApp',
                        cache: false,
                        files: ['js/Controllers/childCtrl11.js']
                    }).then(function() {
                        //  $q.defer().resolve($templateCache.get('tpls/child.html'));
                    });
                }],
                childCtrl2: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad,$templateCache,$q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myApp',
                        cache: false,
                        files: ['js/Controllers/childCtrl12.js']
                    }).then(function() {
                        //  $q.defer().resolve($templateCache.get('tpls/child.html'));
                    });
                }],
            }
        })
        .state('indexState.childState2', {
            url: "/child2", // root route
            views: {
                "childView": {
                    templateUrl: 'tpls/child2.html',
                    controller: 'childCtrl2', // This view will use AppCtrl loaded below in the resolve
                }
            },
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                childCtrl: ['$ocLazyLoad', '$templateCache', '$q', function($ocLazyLoad,$templateCache,$q) {
                    lazyDeferred = $q.defer();
                    return $ocLazyLoad.load({
                        name : 'myApp',
                        cache: false,
                        files: ['js/Controllers/childCtrl2.js']
                    }).then(function() {
                        //  $q.defer().resolve($templateCache.get('tpls/child.html'));
                    });
                }],
            }
        })

}]);