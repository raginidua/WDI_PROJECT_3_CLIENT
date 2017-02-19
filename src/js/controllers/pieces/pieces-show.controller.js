angular
.module('artApp')
.controller('PiecesShowCtrl', PiecesShowCtrl);

PiecesShowCtrl.$inject = ['API', '$http', '$stateParams'];
function PiecesShowCtrl(API, $http, $stateParams) {
  const vm = this;

  $http({
    method: 'get',
    url: `http://localhost:3000/pieces/${$stateParams.id}`
  }).then(response => {
    console.log(response.data);
    vm.piece = response.data;
  }, err => {
    console.log(err);
  });
}
