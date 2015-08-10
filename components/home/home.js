
angular
    .module('app.home', ['ngMaterial'])
    .controller('HomeController', function($location) {
        this.user = {
            name: '',
            email: '',
            phone: '',
            address: '',
            password:''
        };
        this.goTo=function(){
            $location.path("/view")
        }
    });