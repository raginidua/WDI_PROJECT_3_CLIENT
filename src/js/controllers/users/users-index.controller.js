angular
.module('artApp')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['API', '$http', '$resource'];
function UsersIndexCtrl(API, $http, $resource) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id' }
  );

  usersIndex();

  // const Artist = 'Artist';

  function usersIndex(){
    vm.users = User.query({ role: 'Artist' });
    console.log(vm.users);
  }

  // usersIndex();
  // function usersIndex(){
  //   return $http
  //     .get(`${API}/users`)
  //     .then(response => {
  //       vm.users    = response.data;
  //     });
  // }
}
