(function() {
    'use strict';

    angular
        .module('myApp.filters')
        .filter('addressCapitalise', addressCapitalise);

    function addressCapitalise() {
        return filter;

        function filter(input) {
            if (!input || !input.length) { return; }
            return input.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    }
})();
