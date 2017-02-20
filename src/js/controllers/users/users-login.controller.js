angular
.module('artApp')
.controller('UsersLoginCtrl', UsersLoginCtrl);

UsersLoginCtrl.$inject = ['User', 'CurrentUserService'];
function UsersLoginCtrl(User, CurrentUserService) {
  const vm = this;

  vm.usersLogin = () => {
    User.login(vm.user.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };
}
