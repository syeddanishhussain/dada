/**
 * Created by dell1 on 24/07/2015.
 */
var app = angular.module("app.signup", ["ngMaterial", "ngNewRouter", "firebase"])
app.controller("SignupController", function ($rootScope, $location) {

    var $scope = this;
    //this.user = {
    //    name1: '',
    //    email1: '',
    //    confirmpassword: '',
    //    password2:''
    //};



    var mysignup = new Firebase("https://labchatapp.firebaseio.com/SignedUpUsers/")




    $scope.gotoMysignup = function () {


        if ($scope.password3 === $scope.confirmpassword3) {
            mysignup.push({
                UName: $scope.name2,
                UEmail: $scope.email2,
                UPass: $scope.password3,
                UC: $scope.confirmpassword3
            })
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
        for(var i = 0; i < $scope.mysignup.length; i++) {
            var inputName = $scope.Iname === $scope.mysignup[i].UName;
            var inputPas = $scope.Ipassword === $scope.mysignup[i].UPass;
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
