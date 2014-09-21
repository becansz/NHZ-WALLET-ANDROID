angular.module('starter.transid', [])
.service('transs',function($http,sessionService,$location,$stateParams){
      return {
        cektid: function(scope,$route){
        	 //scope.params = 'asu' ;
        	 var damn = $stateParams.idtx;

        	var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          //var asudah = $location.search();
          //var okelah = 'requestType' : 'getBalance','account' : '15631880748279937004'
          $http.get(linknya, {'params' : {'requestType' : 'getTransaction' , 'transaction' : damn} }).success(function(data){
           response.fullHash = data.fullHash;
           response.confirmations = data.confirmations;
           response.signatureHash = data.signatureHash;
           response.amountNQT = data.amountNQT/100000000;
           response.recipientRS = data.recipientRS;
           response.feeNQT = Math.floor(data.feeNQT/100000000);
           response.senderRS = data.senderRS;
           response.signature = data.signature;


          });

          return response;
        	 
        },
        
        }
    });


