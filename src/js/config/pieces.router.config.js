angular
  .module('artApp')
  .config(pieceRouter);

pieceRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function pieceRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  //ui.router used state names to direct app to associated
  //html view file and used associated controller
  $stateProvider
    .state('piecesIndex', {
      url: '/pieces',
      templateUrl: '/js/views/pieces/index.html',
      controller: 'PiecesIndexCtrl as pieces'
    })
    .state('piecesShow', {
      url: '/pieces/:id',
      templateUrl: '/js/views/pieces/show.html',
      controller: 'PiecesShowCtrl as pieces'
    });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
