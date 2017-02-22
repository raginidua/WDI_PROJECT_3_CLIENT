angular
.module('artApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['API', '$http', '$resource', '$stateParams', '$state'];
function UsersEditCtrl(API, $http, $resource, $stateParams, $state) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id'},
    {
      'update': { method: 'PUT' }
    }
  );

  function usersUpdate() {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(() => {
        console.log(vm.user);
        $state.go('usersShow', { id: vm.user.id });
      });
  }

  vm.update = usersUpdate;
}
