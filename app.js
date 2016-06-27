(function () {
    var app = angular.module('expensesPlanner', []);

    app.controller('currencyExchange', ctrl);
    app.controller('ShoppingListCtrl', ctrlSpreadSheet);

    function ctrl($scope) {
        $scope.selectname = 1.0;
        $scope.selectSecondname = 1.0;
        $scope.updateCurrencyName = function () {
            $scope.currencyName = $("#selectSecondname option:selected").attr('label');
        }
    }

    function ctrlSpreadSheet($scope, CurrenciesService) {
        $scope.items = [];
        var defaultCurrency;

        CurrenciesService.downloadCurrencies().then(function (data) {
            $scope.currencies = data;
            defaultCurrency = data[0];
            resetProduct();
        });

        function resetProduct() {
            $scope.newProduct = {
                currency: defaultCurrency
            };
        }

        $scope.licz = function(){
            $scope.total = $scope.items.reduce(function(prevItem,currItem){
                return prevItem + currItem.price;
            },0);
        };

        $scope.removeItem = function(product){
            return $scope.items.forEach(function(item,index){
                if(item === product)
                    $scope.items.splice(index,1)
            })

        };

        $scope.addToList = function() {
            $scope.newProduct.isBought = true;
            var product = angular.copy($scope.newProduct);
            $scope.items.push(product);
            resetProduct();
        };
}})();