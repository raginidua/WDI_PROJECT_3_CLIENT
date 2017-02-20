angular
.module('artApp')
.controller('UsersRegisterCtrl', UsersRegisterCtrl);

UsersRegisterCtrl.$inject = ['User'];
function UsersRegisterCtrl(User) {
  const vm    = this;

  vm.usersRegister = () => {
    User
      .register(vm.user.user)
      .$promise
        .then(data => {
          console.log(data);
        }, err => {
          console.log(err);
        });
  };
}
