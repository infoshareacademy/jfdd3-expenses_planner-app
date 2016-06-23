angular.module('expensesPlanner')
    .directive('currencyEx', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/currencyExchange/currencyExchange.html'
        }
    });