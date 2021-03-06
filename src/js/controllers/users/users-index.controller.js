angular
.module('artApp')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['API', '$http', '$resource'];
function UsersIndexCtrl(API, $http, $resource) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id' }
  );

  vm.updateImage = (user) => {
    console.log(user.pieces[0].image);
    document.getElementById('artistImage').style.backgroundImage = 'url(' + user.pieces[0].image + ')';
  };

  usersIndex();

  // const Artist = 'Artist';

  function usersIndex(){
    vm.users = User.query();
  }

  // usersIndex();
  // function usersIndex(){
  //   return $http
  //     .get(`${API}/users`)
  //     .then(response => {
  //       vm.users    = response.data;
  //     });
  // }

  vm.searchByName = function() {
    vm.searchCriteria = 'All';
    User
    .search({searchTerm: vm.searchTerm})
    .$promise
    .then(response => {
      vm.users = response.users;
    });
  };

}
