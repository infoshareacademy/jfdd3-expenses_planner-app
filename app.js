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

        $scope.items = localStorage.getItem('shoppingList')
            ? JSON.parse(localStorage.getItem('shoppingList')) : [];

        //$scope.items = [];
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

        $scope.licz = function () {
            console.log($scope.items);
            $scope.total = $scope.items.reduce(function (prevItem, currItem) {
                return prevItem + currItem.price;
            }, 0);
        };

        $scope.updateStorage = function () {

            localStorage.setItem('shoppingList', JSON.stringify($scope.items.map(function (item) {
                return {
                    name: item.name,
                    price: item.price,
                    currency: item.currency
                }
            })));
        };


        $scope.removeItem = function (product) {
            return $scope.items.forEach(function (item, index) {
                if (item === product)
                    $scope.items.splice(index, 1);
                $scope.updateStorage();
            });


        };

        $scope.addToList = function () {
            $scope.newProduct.isBought = true;
            var product = angular.copy($scope.newProduct);
            $scope.items.push(product);
            $scope.updateStorage();
            resetProduct();
        };
    }
})();