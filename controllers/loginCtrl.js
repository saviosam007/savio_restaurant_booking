/**
 * Created by SavioJoseph on 8/15/2015.
 */
/**
 * Created by SavioJoseph on 8/15/2015.
 */
(function(){
    angular.module('myapp').controller('loginCtrl',loginController)

    function loginController($location){
        var lctrl=this;
        console.log("login controller invoked")

        lctrl.validate=function(){
            console.dir(lctrl.user.username );
            if(lctrl.user.username==="admin" && lctrl.user.password==="admin123"){
                $location.path("/success")
            }

        }
    }

})();