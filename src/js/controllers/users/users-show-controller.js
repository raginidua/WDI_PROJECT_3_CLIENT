angular
.module('artApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function UsersShowCtrl(API, $http, $stateParams, $resource) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id' });

  vm.user = User.get($stateParams);
  console.log(vm.user);

  // User
  //   .get($stateParams)
  //   .$promise
  //   .then(data => {
  //     vm.user = data;
  //     vm.user.pieces = data.pieces;
  //     console.log(vm.user);
      // vm.pieces.bids.sort((a,b) => {
      //   return b.price - a.price;
      // });
      // vm.highestBid = vm.piece.bids[0].price
    // });


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
