(function(){
    var app = angular.module('expensesPlanner', []);

    app.controller('currencyExchange', ctrl);
    function ctrl($scope) {
        $scope.selectname = 1.0;
        $scope.selectSecondname = 1.0;
    }

    })();