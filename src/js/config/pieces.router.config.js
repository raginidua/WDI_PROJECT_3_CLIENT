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
    .state('piecesNew', {
      url: '/pieces/new',
      templateUrl: '/js/views/pieces/new.html',
      controller: 'PiecesNewCtrl as pieces'
    })
    .state('piecesShow', {
      url: '/pieces/:id',
      templateUrl: '/js/views/pieces/show.html',
      controller: 'PiecesShowCtrl as pieces'
    })
    .state('piecesEdit', {
      url: '/pieces/:id/edit',
      templateUrl: '/js/views/pieces/edit.html',
      controller: 'PiecesEditCtrl as pieces'
    });

  //if none of the above names found then redirect to '/'
  $urlRouterProvider.otherwise('/');
}
