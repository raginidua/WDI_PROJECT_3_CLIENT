angular
.module('artApp')
.controller('UsersLoginCtrl', UsersLoginCtrl);

UsersLoginCtrl.$inject = ['User', 'TokenService'];
function UsersLoginCtrl(User, TokenService) {
  const vm = this;

  vm.usersLogin = () => {
    User.login(vm.user.user)
    .$promise
    .then(data => {
      console.log(data);
      TokenService.setToken(data.token);
    }, err => {
      console.log(err);
    });
  };
}
