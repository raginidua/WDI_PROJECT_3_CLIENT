angular
.module('artApp')
.controller('PiecesEditCtrl', PiecesEditCtrl);

PiecesEditCtrl.$inject = ['API', '$http', '$resource', '$stateParams', '$state'];
function PiecesEditCtrl(API, $http, $resource, $stateParams, $state) {
  const vm = this;

  const Piece = $resource(`${API}/pieces/:id`,
    { id: '@_id'},
    {
      'update': { method: 'PUT' }
    }
  );

  function piecesUpdate() {
    Piece
      .update({ id: $stateParams.id }, vm.piece)
      .$promise
      .then(() => {
        $state.go('piecesIndex');
      });
  }

  vm.update = piecesUpdate;
}
