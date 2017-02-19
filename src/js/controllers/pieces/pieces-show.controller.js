angular
.module('artApp')
.controller('PiecesShowCtrl', PiecesShowCtrl);

PiecesShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function PiecesShowCtrl(API, $http, $stateParams, $resource) {
  const vm = this;

  const Piece = $resource(`${API}/pieces/:id`,
    { id: '@_id' });

  vm.piece = Piece.get($stateParams);
  //
  // $http({
  //   method: 'get',
  //   url: `http://localhost:3000/pieces/${$stateParams.id}`
  // }).then(response => {
  //   console.log(response.data);
  //   vm.piece = response.data;
  // }, err => {
  //   console.log(err);
  // });
}
