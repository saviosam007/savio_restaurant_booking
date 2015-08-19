/**
 * Created by SavioJoseph on 8/15/2015.
 */
/**
 * Created by SavioJoseph on 8/15/2015.
 */
(function(){
    angular.module('myapp').controller('editCtrl',editController)

    function editController($scope,$http,$window,$location){
        $scope.edit=function(id){
            $http.get('/controllers/bookdetails/'+id).success(function(response)
            {
                console.log(response);
                if(response==null){
                    $window.alert("Kindly enter the correct code")
                }
                else{
                $scope.detail=response;
                }
            }).error(function(response){
                $window.alert("Kindly enter the correct code")
            });
           // console.log(id);
        }

        $scope.update=function(){
            $http.put('/controllers/bookdetails/'+$scope.detail._id,$scope.detail).success(function(response) {
                $location.path("/update")
            });


        }
        $scope.cancel= function () {
            $http.delete('/controllers/bookdetails/'+$scope.detail._id).success(function(response) {
                console.log("Record deleted");
                $location.path("/update")
                })
        }
    }
})();