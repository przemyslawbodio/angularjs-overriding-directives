"use strict";

(function (angular) {

    function originalDirectiveDecorator($delegate) {

        const [ original ] = $delegate;
        const { controller } = original;

        original.controller = function () {
            controller.apply(this, arguments);

            const oldShowAlertMethod = this.showAlert;

            this.showAlert = () => {
                alert('OVERRIDDEN ALERT');
                oldShowAlertMethod();
            };
        };

        return $delegate;
    }

    function ConfigApp($provide) {
        $provide
            .decorator('originalDirectiveDirective', originalDirectiveDecorator);
    }

    angular
        .module(ROOT_APPLICATION_NAME, [
            'OriginalDirectiveModule',
            'ExtendedOriginalDirectiveModule'
        ]).config(ConfigApp);

})(angular);