const accountId = 144553
let accountEmail= "navneet11@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not a good write but we can also write our code like this.
let accountState; // undefined
// console.log(accountEmail)

// accountId = 2 // not allowed

accountEmail = "h@adc.com"
accountPassword = "23456"
accountCity = "Delhi"

console.log(accountId);

/*
perfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])