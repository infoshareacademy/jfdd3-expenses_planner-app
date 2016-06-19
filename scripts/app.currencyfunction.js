(function() {
    var app = angular.module('expensePlaner', []);

    app.controller('currencyExchange', control);


    function control($scope){
        $scope.updateCurrencyName = function () {
            $scope.currencyName = $( "#selectSecondname option:selected" ).attr('label');

        }
    }
}());