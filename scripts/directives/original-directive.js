"use strict";

(function (angular) {

    function loadTemplate($templateCache) {
        const template = `
            <div>
                <p>Original Directive</p>
                <p>Hello {{ $ctrl.greetings }}!</p>
                {{ $ctrl.exampleText }}
                <button ng-click="$ctrl.showAlert()">Click to show alert</button>
            </div>
        `;

        $templateCache
            .put('original-directive-template.html', template);
    }

    function originalDirective() {

        function controller() {
            this.showAlert = () => alert('ALERT 1');
        }

        function link(scope, element, attributes, controller) {
            controller.exampleText = 'Example text from directive';
        }

        return {
            restrict: 'E',
            controller,
            controllerAs: '$ctrl',
            bindToController: {
                greetings: '@'
            },
            scope: true,
            link,
            templateUrl: 'original-directive-template.html'
        }
    }

    angular
        .module('OriginalDirectiveModule', [])
        .run(loadTemplate)
        .directive('originalDirective', originalDirective);

})(angular);