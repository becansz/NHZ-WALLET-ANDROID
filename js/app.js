// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.loginService','starter.sessionService','starter.logout','starter.sent','starter.auto','starter.trans','starter.transid','starter.untrans'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'LogoutCtrl', 

      
    })

    .state('app.balance', {
      url: "/balance",
      views: {
        'menuContent' :{
          templateUrl: "templates/data.html",
          controller: 'LoginCtrl',
          controller: 'autoCtrl',

           
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html",
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.sent', {
      url: "/sent",
      views: {
        'menuContent' :{
          templateUrl: "templates/Sent.html",
           controller: 'KirimUang',
        }
      }
    })
    .state('app.trans', {
      url: "/trans",
      views: {
        'menuContent' :{
          templateUrl: "templates/transaksi.html",
           
           controller: 'transaksi',
           
        }
      }
    })
    .state('app.cekid', {
      url: "/cekid/:idtx",
      views: {
        'menuContent' :{
          templateUrl: "templates/cekid.html",

           controller: 'transaksid',
        }
      }
    })

    .state('app.untrans', {
      url: "/untrans",
      views: {
        'menuContent' :{
          templateUrl: "templates/untransaksi.html",
           
           controller: 'untransaksi',
           
        }
      }
    })
.state('app.me', {
      url: "/me",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
        }
      }
    })


    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
})
