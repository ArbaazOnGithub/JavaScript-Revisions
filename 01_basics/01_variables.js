const accountId = 121; //If we don't want to change the variable value 
let accountEmail ="arbaaz@google.com"; //Should be used Normally 
var accountPassword = "1234"; //Prefer not use Var because of isuue in Block scope and Function scope   
accountCity = "JBL"; //Javascript is so safe that we can also use variable without any keyword 

let accountState;//This will print undefined 
accountCity="Bengoluru";
console.log(accountId,accountEmail);//for printing 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);//Shows values of variable in Table format 
