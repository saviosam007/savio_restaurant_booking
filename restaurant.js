/**
 * Created by SavioJoseph on 8/15/2015.
 */

(function(){

 angular.module("myapp",['ngRoute','ngMessages']).config(['$routeProvider',moduleConfig])

    function moduleConfig($routeProvider){
        console.log("HIIII");
        $routeProvider
            .when('/menu',{
               templateUrl: 'views/menu.html',
                controller:'menuCtrl',
                controllerAs:'mctrl'
            })
            .when('/book',{
                templateUrl: 'views/book.html',
                controller:'bookCtrl',
                controllerAs:'bctrl'
            })

            .when('/create',{
                templateUrl: 'views/edit.html',
                controller:'editCtrl',
                controllerAs:'ectrl'
            })

            .when('/login',{
                templateUrl: 'views/login.html',
                controller:'loginCtrl',
                controllerAs:'lctrl'
            })
            .when('/success',{
                templateUrl: 'views/success.html'
            })
            .when('/reservation',{
                templateUrl: 'views/reservation.html',
                controller:'reservationCtrl',
                controllerAs:'rctrl'
            })
            .when('/update',{
                templateUrl: 'views/editmode.html'
            })
            .when('/profile',{
                templateUrl: 'views/profile.html'
            })
    console.log("success");
    };

    angular.module('myapp').controller('reservationCtrl',reservationController)

    function reservationController($scope,$http){
        console.log("reservation controller invoked");
        $http.get('/bookdetails').success(function(response){
            $scope.bookdetails=response;
            console.log(response);
        });
    }
})();