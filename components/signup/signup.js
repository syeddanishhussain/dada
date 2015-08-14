/**
 * Created by dell1 on 24/07/2015.
 */
var app = angular.module("app.signup", ["ngMaterial", "ngNewRouter", "firebase"])
app.controller("SignupController", function ($rootScope, $location) {

    var $scope = this;
    $scope.signin= true;
    $scope.signup = true;
    //this.user = {
    //    name1: '',
    //    email1: '',
    //    confirmpassword: '',
    //    password2:''
    //};



    var mysignup = new Firebase("https://labchatapp.firebaseio.com/SignedUpUsers")




    $scope.gotoMysignup = function () {


        if ($scope.password3 === $scope.confirmpassword3) {

            mysignup.child($scope.name2).update({
                UName: $scope.name2,
                UEmail: $scope.email2,
                UPass: $scope.password3,
                UC: $scope.confirmpassword3

        });
            //$scope.mysignupArray.push(
            //    {UName: $scope.name2, UEmail: $scope.email2, UPass: $scope.password3, UC: $scope.confirmpassword3}
            //);
            $scope.name2 = "",
                $scope.email2 = "",
                $scope.password3 = "",
                $scope.confirmpassword3 = ""

            $location.path("/home");


        }

        else {
            alert("Password not match!")
        }

    };
    var login = false;

    $scope.Usignin = function(){
        alert("daadsdsax")
        mysignup.child($scope.password3).update({
            Iname: $scope.name3,
            Ipassword: $scope.password4

        });
        $scope.name3 = "",
            $scope.password4 = ""
        for(var i = 0; i < $scope.mysignup.length; i++) {
            var inputName = $scope.name3 === $scope.mysignup[i].name2;
            var inputPas = $scope.password4 === $scope.mysignup[i].password3;
            if ((inputName) && (inputPas)) {
                login = true;
                break;
            }

        }

        if(login===true){
            $location.path("/view");
            $rootScope.$apply();
        alert("Danish")
        }
        else{
            alert("Wrong User name or Password");
        alert("Hammad")
        }


    };


});
