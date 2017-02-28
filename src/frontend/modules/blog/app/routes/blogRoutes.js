coreRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function coreRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('blog',{

            url         : '/blog',
            controller  : 'blogCtrl' ,
            templateUrl : require('../views/blogIndex.html')

        })

}