/**
 * Created by dell1 on 24/07/2015.
 */
var app = angular.module("app",["ngMaterial","ngNewRouter","firebase","app.main","app.signup","app.signin","app.home","app.view"])
app.controller("AppController",function($scope,$router,$firebaseObject,$rootScope,$location){
    $router.config([
        {path:"/", component:"home"},
        {path:"/home",component:"home"},
        {path:"/view",component:"view"},
        {path:"/signin",component:"signin"},
        {path:"/signup",component:"signup"}

    ]);

    var ref = new Firebase("https://labchatapp.firebaseio.com/hello/brother/danish/mohsin");

    var users = ref.child("hello");
    var user2 = users.child("brother/danish");
    var user3 = user2.child("mohsin");

    var path = user2.toString();
    var syncObject  = $firebaseObject(ref);
    syncObject.$bindTo($scope, "user");

    $scope.goToHome=function(){
        $location.path("/home")
    }
    $scope.facebook=function(){

        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path("/view");
                $rootScope.$apply();


            }
        });
    };
    $scope.google = function(){
        var ref = new Firebase("https://labchatapp.firebaseio.com");
        ref.authWithOAuthPopup("google", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path("/view");
                $rootScope.$apply();
            }
        });
    }

});

