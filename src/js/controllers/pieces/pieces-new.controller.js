angular
.module('artApp')
.controller('PiecesNewCtrl', PiecesNewCtrl);

PiecesNewCtrl.$inject = ['API', '$http', '$stateParams', '$resource','$state', 'CurrentUserService'];
function PiecesNewCtrl(API, $http, $stateParams, $resource, $state, CurrentUserService) {
  const vm  = this;
  vm.piece = {};

  const currentUser = CurrentUserService.currentUser;

  const Piece = $resource(`${API}/pieces/:id`, { id: '@_id'});

  vm.create = piecesCreate;

  function piecesCreate() {
    console.log(currentUser.id);
    vm.piece.piece.user_id = currentUser.id;
    Piece
    .save(vm.piece.piece)
    .$promise
    .then(() => {
      console.log(vm.piece.piece);
      $state.go('piecesIndex');
    });
  }

}
