angular.module('expensesPlanner')
    .directive('tripPlanner', function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/tripPlanner/tripPlanner.html'
        }
    });
