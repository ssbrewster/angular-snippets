(function() {
    'use strict';

    angular
    .module('dataservices')
    .factory('CacheDataClass', CacheDataClass);

    CacheDataClass.$inject = ['CacheFactory'];

    function CacheDataClass(CacheFactory) {

        var CacheData = function(uid) {
            this.uid = uid;
            this.newData = null;
            this.cache = this.initCache();
        };

        CacheData.prototype = {
            constructor: CacheData,
            initCache: function() {
                var self = this;

                if (!CacheFactory.get(self.uid + '/cache')) {
                    CacheFactory.createCache(self.uid + '/cache', {
                        maxAge: 60 * 60 * 1000,
                        deleteOnExpire: 'aggressive'
                    });
                }
                var cache = CacheFactory.get(self.uid + '/cache');

                self.cache = cache;
                return cache;
            },
            getData: function() {
                var self = this;

                self.newData = self.cache.get(self.uid) ?
                    self.cache.get(self.uid) :
                    {};
                
                return self.newData;
            },
            setData: function(data) {
                var self = this;
                var cache = self.initCache(); 

                cache.put(self.uid, data);
                self.cache = cache;
            },
            resetData: function() {
                var self = this;

                self.cache.remove(self.uid);
                self.newData = {};
                return self.newData;
            }
        };

        return CacheData;

    }
})();
