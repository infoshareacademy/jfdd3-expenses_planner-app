/**
 * Created by krystian on 16.06.16.
 */
(function() {
    var app = angular.module('expensePlaner', []);


    app.controller('travelPlaner', control);
    function control($scope){
        $scope.selectname = 1.0;
        $scope.selectSecondname = 1.0;
    }
}());