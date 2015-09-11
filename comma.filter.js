(function() {
    'use strict';

    angular
        .module('myApp.filters')
        .filter('joinBy', joinBy);

    function joinBy() {
        return filter;

        function filter(input, delimiter) {
            return input ? input + delimiter : '';
        }
    }
})();
