angular
.module('artApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function UsersShowCtrl(API, $http, $stateParams, $resource) {
  const vm = this;

  const User = $resource(`${API}/users/:id`,
    { id: '@_id' });

    // vm.user = User.get($stateParams);
    // console.log(vm.user);

    User
    .get($stateParams)
    .$promise
    .then(data => {
      console.log(data);
      vm.user = data;
      vm.highBids = vm.user.bids.filter(bid => {
        return (bid.bidder.id === bid.work.high_bidder && bid.price === bid.work.high_bid_amount);
      });
      vm.holdArray = vm.user.bids.filter(bid => {
        return (bid.bidder.id !== bid.work.high_bidder);
      });
      vm.newArray = vm.holdArray.sort((a, b) => {
        return b.price - a.price;
      });
      vm.lowBids = removeDuplicatesBy(x => x.work.id, vm.newArray)
    });

    function removeDuplicatesBy(keyFn, array) {
      let mySet = new Set();
      return array.filter(function(x) {
        const key = keyFn(x), isNew = !mySet.has(key);
        if (isNew) mySet.add(key);
        return isNew;
      });
    }


    //
    // $http({
    //   method: 'get',
    //   url: `http://localhost:3000/pieces/${$stateParams.id}`
    // }).then(response => {
    //   console.log(response.data);
    //   vm.piece = response.data;
    // }, err => {
    //   console.log(err);
    // });
  }
