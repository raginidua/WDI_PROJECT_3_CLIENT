angular
.module('artApp')
.controller('PiecesIndexCtrl', PiecesIndexCtrl);

PiecesIndexCtrl.$inject = ['API', '$http', '$resource'];
function PiecesIndexCtrl(API, $http, $resource) {
  const vm = this;

  const Piece = $resource(`${API}/pieces/:id`,
    { id: '@_id' }
  );

  piecesIndex();

  function piecesIndex(){
    vm.pieces = Piece.query();
    console.log('pieces', vm.pieces);
  }

  vm.updateImage = (piece) => {
    console.log(piece.image);
    document.getElementById('pieceImage').style.backgroundImage = 'url(' + piece.image + ')';
  };

  // $http({
  //   method: 'get',
  //   url: 'http://localhost:3000/pieces'
  // }).then(response => {
  //   console.log(response.data);
  //   vm.pieces = response.data;
  //   console.log(vm.pieces[0].title);
  // }, err => {
  //   console.log(err);
  // });
}
