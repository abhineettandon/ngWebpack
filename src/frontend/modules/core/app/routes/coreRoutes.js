coreRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function coreRoutes($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/',{

            url         : '/',
            controller  : 'baseCtrl' ,
            templateUrl : require('../views/coreIndex.html')

        })

}