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
        $scope.items = [];

        function resetProduct() {
            $scope.newProduct = {};
        }

        $scope.licz = function(){
            console.log($scope.items);
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


        $scope.updateCurrencyLabel = function () {
            $scope.currencyLabel = $("#TheCurrency option:selected").attr('label');
            $scope.newcurrencyLabel = angular.copy($scope.currencyLabel);
        }

}})();