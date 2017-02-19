angular
.module('artApp')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['API', '$http'];
function UsersIndexCtrl(API, $http) {
  const vm = this;

  usersIndex();
  function usersIndex(){
    return $http
      .get(`${API}/users`)
      .then(response => {
        vm.users    = response.data;
      });
  }
}
