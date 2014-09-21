angular.module('starter.trans', [])
    .service('trans',function($http,sessionService,$location){
      return {
        
        transaksi: function(id){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          //var asudah = $location.search();
          //var okelah = 'requestType' : 'getBalance','account' : '15631880748279937004'
          $http.get(linknya, {'params' : {'requestType' : 'getAccountTransactionIds' , 'account' : sessionService.get('user')} }).success(function(data){
          	var jumlahjson= 0;
            
            //var asu = data.transactionIds;
            var data1 = Object.keys(data.transactionIds).length;
            var hasil1 = data1-1;
            var hasil2 = data1-2;
            var hasil3 = data1-3;
            var hasil4 = data1-4;
            var hasil5 = data1-5;
            var hasil6 = data1-6;
            var hasil7 = data1-7;
            var hasil8 = data1-8;
            var hasil9 = data1-9;
            var hasil10 = data1-10;
            response.datas1 = data.transactionIds[hasil1];
            response.datas2 = data.transactionIds[hasil2];
            response.datas3 = data.transactionIds[hasil3];
            response.datas4 = data.transactionIds[hasil4];
            response.datas5 = data.transactionIds[hasil5];
            response.datas6 = data.transactionIds[hasil6];
            response.datas7 = data.transactionIds[hasil7];
            response.datas8 = data.transactionIds[hasil8];
            response.datas9 = data.transactionIds[hasil9];
            response.datas10 = data.transactionIds[hasil10];

          });

          return response;
        },
        
        }
    });


