/**
 * Created by SavioJoseph on 8/15/2015.
 */
/**
 * Created by SavioJoseph on 8/15/2015.
 */
(function(){
    angular.module('myapp').controller('bookCtrl',bookController)

    function bookController($scope,$http){
        console.log("book controller invoked")
        //var dt = new Date();
        //$scope.time = new Date(1970,0,1,dt.getHours(),dt.getMinutes(),dt.getSeconds());
        $scope.book=function(){
            console.log("clicked");

            console.dir($scope.detail);
            $http.post('/controller/bookdetails', $scope.detail).success(function(response){
               console.dir(response._id);$scope.detail=response;
            })
        }
    }
})();