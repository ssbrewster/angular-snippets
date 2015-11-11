(function() {
    'use strict';

    angular
    .module('dataservices')
    .factory('RequestFactory', RequestFactory);

    RequestFactory.$inject = ['CacheDataClass']; 

    function RequestFactory(CacheDataClass) {
        return {
            createCache: function(uid) {
                return new CacheDataClass(uid);
            }
        };
    }
})();
