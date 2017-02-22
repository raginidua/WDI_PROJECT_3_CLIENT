angular
.module('artApp')
.controller('PiecesShowCtrl', PiecesShowCtrl);

PiecesShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function PiecesShowCtrl(API, $http, $stateParams, $resource) {
  const vm = this;

  const Piece = $resource(`${API}/pieces/:id`,
    { id: '@_id' });

  const Bid = $resource(`${API}/bids/:id`,
    { id: '@_id' });

  Piece
    .get($stateParams)
    .$promise
    .then(data => {
      console.log('data', data);
      vm.piece = data;
      vm.piece.bids.sort((a,b) => {
        return b.price - a.price;
      });
      vm.bidMinimum = vm.piece.bids[0].price + 1;
    });

  vm.placeBid = function(){
    vm.bid.piece_id = vm.piece.id;
    console.log(vm.bid);
    Bid
      .save(vm.bid)
      .$promise
      .then(data => {
        console.log(data);
        vm.piece.bids.unshift(data);
        vm.bid = null;
      });
  };

}
