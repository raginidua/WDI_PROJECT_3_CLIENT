angular
.module('artApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('piecesIndex');
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('usersLogin');
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };
}
