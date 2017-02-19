angular
.module('artApp')
.controller('UsersLoginCtrl', UsersLoginCtrl);

UsersLoginCtrl.$inject = ['User'];
function UsersLoginCtrl(User) {
  const vm = this;

  vm.usersLogin = () => {
    User.login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
    	console.log(err);
    });
  };
}
