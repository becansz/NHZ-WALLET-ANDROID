angular.module('starter.auto', [])
    .service('UserService',function($http,sessionService,$location){
      return {
        
        balancenhz: function(id){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          //var asudah = $location.search();
          //var okelah = 'requestType' : 'getBalance','account' : '15631880748279937004'
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            response.datas = data.balanceNQT;
          });

          return response;
        },
        guaranted: function(id){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            response.datas = data.guaranteedBalanceNQT;
          });
          return response;
        },
        unconf: function(id){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            response.datas = data.unconfirmedBalanceNQT;
          });
          return response;
        },
        forged: function(id){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          $http.get(linknya, {'params' : {'requestType' : 'getBalance' , 'account' : sessionService.get('user')} }).success(function(data){
            response.datas = data.forgedBalanceNQT;
          });
          return response;
        },
        }
    });


