angular
.module('artApp')
.controller('UsersRegisterCtrl', UsersRegisterCtrl);

UsersRegisterCtrl.$inject = ['User', 'CurrentUserService'];
function UsersRegisterCtrl(User, CurrentUserService) {
  const vm    = this;

  vm.usersRegister = () => {
    User
      .register(vm.user.user)
      .$promise
        .then(() => {
          CurrentUserService.getUser();
        }, err => {
          console.log(err);
        });
  };
}
