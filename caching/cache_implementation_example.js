(function() {
    'use strict';

    angular
    .module('cacheExample')
    .controller('CacheExampleController', CacheExampleController);

    CacheExampleController.$inject = ['CacheFactory', 'RequestFactory', '$stateParams']; 

    function CacheExampleController(CacheFactory, RequestFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {
            vm.paramsCache = RequestFactory.createCache($location.path() + userID);
        }

        function setCache() {
            vm.paramsCache.setData({
                userID: $stateParams.userID,
                email: $stateParams.email,
            });
        }
    }
})();
