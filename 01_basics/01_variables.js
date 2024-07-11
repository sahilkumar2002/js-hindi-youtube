const accountId =21232 // account_Id //accountName
let accountEmail="sahil@gmail.com"
var accountPassword="22323"
accountCity="jaipur"
let accountStatus;

 /*
 Prefer not to use var
 because of issue in block scope and functional scope
 */
//accountId=2 not allowed
console.log(accountId)
accountEmail ="ganish@gamil.com"
accountPassword="3232323"
accountCity="bajaj nagar"
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus])