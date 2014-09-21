angular.module('starter.sent', [])
    .factory('SentBalance',function($http,sessionService,$location){
      return {
        sent:function(nhz,scope){
          var response = {};
          var linknya =  'http://146.148.35.152:1234/127.0.0.1:7776/nhz?';
          var idpub = sessionService.get('pubid');
          var fee = nhz.jumlah;
                
                function asu(scope)
                {     
          if (fee < "1499") {
          hasilfee ='1';
                  
            
          }
          else if(fee > "1499" && fee < "2500"){
            hasilfee='2';
                    
            
          }
          else if(fee > '2499' && fee < "3500"){
            hasilfee='3';
                    
            
          }
          else if(fee > '3499' && fee < "4500"){
            hasilfee='4';
                    
            
          }
          else if(fee > '4499' && fee < "5500"){
            hasilfee='5';
                    
            
          }
          else if(fee > '5499' && fee < "6500"){
            hasilfee='6';
                    
            
          }
          else if(fee > '6499' && fee < "7500"){
            hasilfee='7';
                    
            
          }
          else if(fee > '7499' && fee < "8500"){
            hasilfee='8';
                     
          }
                    else if(fee > '8499' && fee < "9500"){
            hasilfee='9';
                     
          }
                    else if(fee > '9499' && fee < "10000"){
            hasilfee='10';
                     
          }
          else if (fee > "9999")
          {
            hasilfee= Math.floor(fee/1000);
          }

          return hasilfee;
        };


          
          
          //var datakirim = 'requestType': 'sendMoney','secretPhrase':nhz.pwd,'recipient':nhz.alamat,'amountNHZ':nhz.jumlah*1,'feeNQT': hasilfee,'deadline':'1440','publicKey':'asu';
           var jumlahsemua = fee*100000000;
           
           var feekamu = asu(fee)*100000000;

          //console.log('asu');
          var pwd = nhz.pwd;
          if (pwd != sessionService.get('aliasnama')) {
            scope.hasildata = "Wrong password";
          }else
          {
          var response ={};
          var $promise=$http.get(linknya, {'params' : {'requestType': 'sendMoney','secretPhrase':nhz.pwd,'recipient':nhz.penerima,'amountNQT':jumlahsemua,'feeNQT': feekamu,'deadline':'1440','publicKey':idpub} }).success(function(data){
              response.hasil = data.transaction;
              response.hasil2 = data.errorCode;
              response.hasil3 = data.errorCode;
            });
          //return response;
          $promise.then(function(msg){
          var uid=response.hasil;
          var uid2=response.hasil2;
          var uid3=response.hasil3;
          if (uid != '') {
              scope.hasildata = 'sukses'; 
          }
          if (uid2 == '4'){
              scope.hasildata = 'Wrong recipient';    
            }
            if (uid3 == '6') {
                scope.hasildata = 'Not enough funds'; 
            }
              
            });
        }
            //response.datas = data.balanceNQT;
          //});
          //
          //return response;
        }
        }
    })
