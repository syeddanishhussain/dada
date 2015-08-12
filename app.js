/**
 * Created by dell1 on 24/07/2015.
 */
var app = angular.module("app", ["ngMaterial", "ngNewRouter", "firebase", "app.main", "app.signup", "app.signin", "app.home", "app.view"])
app.controller("AppController", function ($scope, $router, $firebaseObject, $firebaseArray, $rootScope, $location) {
    $router.config([
        {path: "/", component: "home"},
        {path: "/home", component: "home"},
        {path: "/view", component: "view"},
        {path: "/signin", component: "signin"},
        {path: "/signup", component: "signup"}

    ]);



    var ref = new Firebase("https://labchatapp.firebaseio.com/");


    var path = ref.toString();
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, "user");

    $scope.goToHome = function () {
        $location.path("/home")
    };
    $scope.anonymous = function () {
        var ref = new Firebase("https://labchatapp.firebaseio.com");
        ref.authAnonymously(function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                alert("You Are Anonymous Now!")
                $location.path("/view");
                $rootScope.$apply();
            }
        });





            }


    $scope.facebook = function () {

        ref.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path("/view");
                $rootScope.$apply();


            }
        });
    };
    $scope.google = function () {
        var ref = new Firebase("https://labchatapp.firebaseio.com");
        ref.authWithOAuthPopup("google", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path("/view");
                $rootScope.$apply();

            }
        });
    };
    $scope.github = function () {
        var ref = new Firebase("https://labchatapp.firebaseio.com");
        ref.authWithOAuthPopup("github", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                $location.path("/view");
                $rootScope.$apply();

            }
        });
    };





    $scope.yoursignup = function () {


        $location.path("/signup");


    };
    /*$scope.custom = function(){

     var FirebaseTokenGenerator = require("firebase-token-generator");
     var tokenGenerator = new FirebaseTokenGenerator("peN358SZYuoqWRBUL99QjP1OGQWSS2PXbtW6gues");
     var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});
     var ref = new Firebase("https://labchatapp.firebaseio.com/");
     ref.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
     if (error) {
     console.log("Login Failed!", error);
     } else {
     console.log("Login Succeeded!", authData);
     $location.path("/view");
     $rootScope.$apply();
     }
     });

     };
     */

});

