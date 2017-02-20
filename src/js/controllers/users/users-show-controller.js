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
