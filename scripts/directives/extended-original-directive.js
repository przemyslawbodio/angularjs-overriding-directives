"use strict";

(function (angular) {

    function loadTemplate($templateCache) {
        const template = `
            <div>
                <p>Extended Original Directive</p>
                <p>HELLO - {{ $ctrl.greetings }}!!!</p>
                {{ $ctrl.exampleText }}
                <button ng-click="$ctrl.showAlert()">Click to show alert</button>
            </div>
        `;

        $templateCache
            .put('extended-original-directive-template.html', template);
    }

    function extendedOriginalDirective( originalDirectiveDirective ) {
        const [ original ] = originalDirectiveDirective;

        function controller() {
            original.controller.apply(this, arguments);

            const oldShowAlertMethod = this.showAlert;

            this.showAlert = () => {
                oldShowAlertMethod();
                alert('ALERT 2');
            };
        }

        function link(scope, element, attributes, controller) {
            original.link.apply(this, arguments);
        }

        return {
            restrict: 'A',
            controller,
            controllerAs: '$ctrl',
            bindToController: original.bindToController,
            scope: true,
            link,
            templateUrl: 'extended-original-directive-template.html'
        }
    }

    angular
        .module('ExtendedOriginalDirectiveModule', [])
        .run(loadTemplate)
        .directive('extendedOriginalDirective', extendedOriginalDirective)

})(angular);