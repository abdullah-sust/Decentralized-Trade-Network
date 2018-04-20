'use strict';
/**
 * productTransfer
 * @param {org.bjitgroup.com.productTransfer} transferredProduct - the trade to be processed
 * @transaction
 */
async function productTransfer(transferredProduct) {
    var total = transferredProduct.product.quantity * transferredProduct.product.unitPrice;
    if(transferredProduct.ownerId==transferredProduct.newOwnerId){
      alert("Buyer & Seller Id can't be same");
    }else if(total<=transferredProduct.newOwner.balance){
      transferredProduct.product.productId = transferredProduct.productId;
      transferredProduct.owner.personId =  transferredProduct.ownerId;
      transferredProduct.owner.balance += total;
      transferredProduct.product.owner = transferredProduct.newOwner;
      transferredProduct.newOwner.personId =  transferredProduct.newOwnerId;
      transferredProduct.newOwner.balance = transferredProduct.newOwner.balance - total;
      return getAssetRegistry( 'org.bjitgroup.com.Product' )
      .then(function (assetRegistry) {
         return assetRegistry.updateAll( [ transferredProduct.product] );
         }).then(function () {
         return getParticipantRegistry('org.bjitgroup.com.Person')
         .then(function (participantRegistry) {
         return participantRegistry.updateAll([transferredProduct.owner,transferredProduct.newOwner]);
         }); 
      });
    }else{
    alert('Provide valid input!');
  }
}


/*
return getAssetRegistry( 'org.bjitgroup.com.Product' )
 .then(function (assetRegistry) {
 return assetRegistry.updateAll( [ transferredProduct.product] );
 }).then(function () {
 return getParticipantRegistry('org.bjitgroup.com.Person')
 .then(function (participantRegistry) {
 return participantRegistry.updateAll([transferredProduct.owner,transferredProduct.newOwner]);
 }); 
 });*/


/*
 if(total<=transferredProduct.newOwner.balance){
        transferredProduct.product.owner.balance += total;
        var participantRegistry1 =  getParticipantRegistry('org.bjitgroup.com.Person');
        participantRegistry1.update(transferredProduct.product.owner);
        transferredProduct.product.owner = transferredProduct.newOwner;
        transferredProduct.newOwner.balance = transferredProduct.newOwner.balance - total;
        var participantRegistry2 = getParticipantRegistry('org.bjitgroup.com.Person');
        participantRegistry2.update(transferredProduct.newOwner);
        var assetRegistry = getAssetRegistry('org.bjitgroup.com.Product');
        assetRegistry.update(transferredProduct.product);
    }
*/    