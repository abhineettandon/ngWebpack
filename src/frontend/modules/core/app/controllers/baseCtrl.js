baseCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];

export default function baseCtrl ($scope, $timeout, $mdSidenav){

    let buildToggler = (componentId)=>{
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    

}