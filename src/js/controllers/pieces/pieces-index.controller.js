angular
.module('artApp')
.controller('PiecesIndexCtrl', PiecesIndexCtrl);

PiecesIndexCtrl.$inject = ['API', '$http'];
function PiecesIndexCtrl(API, $http) {
  const vm = this;

  $http({
    method: 'get',
    url: 'http://localhost:3000/pieces'
  }).then(response => {
    console.log(response.data);
    vm.pieces = response.data;
    console.log(vm.pieces[0].title);
  }, err => {
    console.log(err);
  });
}
