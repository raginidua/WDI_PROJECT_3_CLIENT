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
      const currentTime = (Date.now());
      const closingTime = vm.piece.closing_time;
      vm.closingTimeInSeconds = new Date(closingTime).getTime();
      const RemainingTime = closingTimeInSeconds- currentTime;
      const RemainingTimeInMinutes = RemainingTime / 60000;
      const HoursRemaining = RemainingTimeInMinutes / 60;
      vm.DaysRemaining = Math.floor(HoursRemaining/24);
      vm.HoursRemaining = Math.floor(HoursRemaining - (vm.DaysRemaining*24));
      vm.MinutesRemaining = Math.round(RemainingTimeInMinutes - (vm.DaysRemaining*24*60) - (vm.HoursRemaining*60));
      console.log(vm.DaysRemaining, 'Days remaining', vm.HoursRemaining, 'Hours Remaining', vm.MinutesRemaining, 'Minutes Remaining');
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
