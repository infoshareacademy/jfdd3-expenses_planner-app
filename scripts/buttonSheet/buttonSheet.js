angular.module('expensesPlanner')
    .directive('signOut', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/buttonSheet/buttonSheet.html'
        }
    });