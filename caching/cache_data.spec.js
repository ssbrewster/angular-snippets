/* jshint -W030, -W117 */
describe('CacheDataClass', function() {
    'use strict';

    var CacheData,
        CacheDataClass,
        CacheFactory;

    var data = {
        1: 'Test string',
        2: 100,
        3: 'mymail@mail.com'
    };

    var uid = 'path/1';

    beforeEach(module('angular-cache'));
    beforeEach(module('dataservices'));

    beforeEach(inject(function(_CacheDataClass_, _CacheFactory_) {
        CacheFactory = _CacheFactory_; 
        CacheDataClass = _CacheDataClass_;
        CacheData = new CacheDataClass(uid, data);
    }));

    afterEach(function() {
        CacheFactory.destroy(uid + '/cache');
    });

    it('should initialise a cache', function() {
        CacheData.initCache();
        expect(CacheData).to.have.property('cache');
        expect(CacheData.cache).to.have.property('$$id', 'path/1/cache');
    });

    it('should set data in a cache', function() {
        CacheData.setData(data);

        var cache = CacheFactory.get(uid + '/cache');
        var testCache = cache.get(uid);
        expect(testCache).to.have.property('1', 'Test string');
        expect(testCache).to.have.property('2', 100);
        expect(testCache).to.have.property('3', 'mymail@mail.com');
    });

    it('should get data from a cache', function() {
        CacheData.setData(data);
        var testData = CacheData.getData();

        expect(testData).to.have.property('1', 'Test string');
        expect(testData).to.have.property('2', 100);
        expect(testData).to.have.property('3', 'mymail@mail.com');
    });

    it('should reset the data in a cache', function() {
        CacheData.setData(data);
        CacheData.resetData();
        var testData = CacheData.getData();

        expect(testData).to.be.empty;
    });
});
