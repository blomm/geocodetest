var app = angular.module('testApp',[]);

app.controller('mainCtrl', function($scope, $q, $http){
    
    $scope.submitAddress = function(searchAddress){
        
        var deferred = $q.defer();
    
        $http.get("https://blahblablah/match/v1/address/geocode?query="+searchAddress+"&country=gb&multimatch=all", { "x-api-key": "blahblablah" })
               .then(function (response) {
                   deferred.resolve(response);
               }, function (responseError) {
                   deferred.reject(responseError);
               });
        
        deferred.promise.then(function(response){
            $scope.result = response;
        })
    }
    
})