(function () {
    var app = angular.module('expensesPlanner');
    app.service('CurrenciesService', function ($http) {
        this.downloadCurrencies = function () {
            return $http.get('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
                .then(function (response) {
                    var rates = response.data[0].rates;
                    rates.unshift({
                        code: 'PLN',
                        mid: '1',
                        currency: 'polski złoty'
                    });
                    return rates;
                });
        }
    });
})();