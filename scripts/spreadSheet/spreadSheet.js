angular.module('expensesPlanner')
    .directive('sheetContainer', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/spreadSheet/spreadSheet.html'
        }
    });