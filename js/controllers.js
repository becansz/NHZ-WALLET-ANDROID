angular.module('starter.controllers', [])


.controller('LoginCtrl', ['$scope','loginService','sessionService', function ($scope,loginService,sessionService) {
  $scope.msgtxt=sessionService.get('aliasnama');
  $scope.dataget=sessionService.get('loginget');
  $scope.noticedata=sessionService.get('notice');
  $scope.noticedata2=sessionService.get('notice2');
  

  $scope.login=function(user){
    loginService.login(user,$scope); //call login service
  };
}])

.controller('KirimUang',['$scope','SentBalance','sessionService',  function ($scope,SentBalance,sessionService) {
  $scope.hasildata='';
  $scope.puberor=sessionService.get('erorpubid');
  $scope.kirimuang=sessionService.get('pubid2');
  $scope.sent=function(nhz){
    SentBalance.sent(nhz,$scope);
    //console.log(asu)

  }
}])
.controller('transaksid', function($scope,transs) {
  
$scope.transdetails = transs.cektid();
//console.log($stateParams.idtx);
           $scope.fullHash = transs.cektid();
           $scope.confirmations = transs.cektid();
           $scope.signatureHash = transs.cektid();
           $scope.amountNQT = transs.cektid();
           $scope.recipientRS = transs.cektid();
           $scope.feeNQT = transs.cektid();
           $scope.senderRS = transs.cektid();
           $scope.signature = transs.cektid();
})

.controller('autoCtrl', function($scope,UserService,sessionService) {
  
$scope.oke1 = UserService.balancenhz();
$scope.oke2 = UserService.guaranted();
$scope.oke3 = UserService.unconf();
$scope.oke4 = UserService.forged();
$scope.walletme = sessionService.get('wallet');

})

.controller('transaksi', function($scope,trans,sessionService) {
  
$scope.tranc = trans.transaksi();

})
.controller('untransaksi', function($scope,untrans,sessionService) {
  
$scope.untranc = untrans.transaksi();

})
;
