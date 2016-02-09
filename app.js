var app = angular.module('testApp',[]);

app.controller('mainCtrl', function($scope, $q, $http){

    $scope.submitAddress = function(searchAddress){

        $http({
            method: 'GET',
            url: 'https://blahblablah/match/v1/address/geocode?query=' + searchAddress + '&country=gb&multimatch=all',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'blahblablah'
            }
        }).then(
            function success(res) {
                console.log(res);
            },
            function error(res) {
                console.log(res);
            }
        );

    }

})
