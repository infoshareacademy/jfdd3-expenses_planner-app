angular.module('expensesPlanner')
    .directive('tripplanner', function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/tripPlanner/tripPlanner.html'
        }
    });
