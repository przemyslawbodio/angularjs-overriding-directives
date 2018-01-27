"use strict";

(function (angular) {

    function RootController() {
        this.messages = {
            original: 'everybody',
            extended: 'AngularJS'
        };
    }

    angular
        .module(ROOT_APPLICATION_NAME)
        .controller('RootController', RootController);

})(angular);