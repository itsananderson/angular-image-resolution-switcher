var imageSwitcher = angular.module('ImageSwitcher', []);

imageSwitcher.run(function($rootScope, $window){
    $rootScope.windowWidth = $window.outerWidth;
    angular.element($window).bind('resize',function(){
        $rootScope.windowWidth = $window.innerWidth;
        $rootScope.$apply('windowWidth');
    });
});


imageSwitcher.controller('SwitcherCtrl', function($scope, $rootScope) {
    var vm = this;
    vm.imageUrl = 'http://placehold.it/750x150';
    $rootScope.$watch('windowWidth',function(newVal, oldVal){
        if (newVal < 550) {
            vm.imageUrl = 'http://placehold.it/350x150';
        } else if (newVal < 800 ) {
            vm.imageUrl = 'http://placehold.it/550x150';
        } else if (newVal < 1000 ) {
            vm.imageUrl = 'http://placehold.it/800x150';
        } else {
            vm.imageUrl = 'http://placehold.it/1000x150';
        }
    });
});