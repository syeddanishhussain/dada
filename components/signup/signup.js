/**
 * Created by dell1 on 24/07/2015.
 */
var app = angular.module("app.signup", ["ngMaterial", "ngNewRouter", "firebase"])
app.controller("SignupController", function ($rootScope, $location) {
    this.user = {
        name1: '',
        email1: '',
        phone: '',
        address: '',
        password2:''
    };
    this.goToNxt=function(){
        $location.path("/view");

    }

})
