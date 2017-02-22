angular
.module('artApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function UsersShowCtrl(API, $http, $stateParams, $resource) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id' });

  // vm.user = User.get($stateParams);
  // console.log(vm.user);

  User
    .get($stateParams)
    .$promise
    .then(data => {
      vm.user = data;
      console.log(vm.user);
      for (var i = 0; i < vm.user.bids.length; i++) {
        console.log(vm.user.bids.bid);
      }
    });


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
