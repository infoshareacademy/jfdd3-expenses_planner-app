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

    function ctrlSpreadSheet($scope) {
        $scope.items = localStorage.getItem('shoppingList')
            ? JSON.parse(localStorage.getItem('shoppingList'))
            : [];

        function resetProduct() {
            $scope.newProduct = {};
        }

        $scope.licz = function(){
            console.log($scope.items);
            $scope.total = $scope.items.reduce(function(prevItem,currItem){
                return prevItem + currItem.price;
            },0);
        };

        $scope.updateStorage = function () {
            debugger;
            localStorage.setItem('shoppingList', JSON.stringify($scope.items.map(function(item){
                return {
                    name: item.name,
                    price: item.price
                }
            })));
        };

        $scope.removeItem = function(product){
            $scope.items.forEach(function(item,index){
                if(item === product)
                    $scope.items.splice(index,1);
            });
            $scope.updateStorage();
        };

        $scope.addToList = function() {
            $scope.newProduct.isBought = true;
            var product = angular.copy($scope.newProduct);
            $scope.items.push(product);
            $scope.updateStorage();
            resetProduct();
        }
    }

})();