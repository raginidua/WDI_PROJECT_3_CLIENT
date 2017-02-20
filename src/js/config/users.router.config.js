angular
  .module('artApp')
  .config(userRouter);

userRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function userRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  //ui.router used state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'HomeCtrl as home'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/js/views/about.html',
      controller: 'HomeCtrl as home'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersRegister', {
      url: '/users/register',
      templateUrl: '/js/views/users/register.html',
      controller: 'UsersRegisterCtrl as usersRegister'
    })
    .state('usersLogin', {
      url: '/users/login',
      templateUrl: '/js/views/users/login.html',
      controller: 'UsersLoginCtrl as usersLogin'
    });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}