(function() {
    var app = angular.module('expensePlaner', []);

    app.controller('currencyExchange', control);


    function control($scope){
        debugger;
        $scope.updateCurrencyName = function () {
            debugger;
            $scope.currencyName = $( "#selectSecondname option:selected" ).attr('label');

        }
    }
}());