const accountId = 144523;
let accountEmail = "saurav@google.com";
var accountPassword = "124523678";
accountCity = "Jaipur";
let accountState;

// accountId = 007;

accountEmail = "skv@tinder.com";
accountPassword = "0070010";
accountCity = "Mathura";
console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/**
 * Prefer Not to use var
 * Because of the issue in block scope and functional Scope
 *
 * Use let for Variables values and const for constant values
 *
 * if a variable is declared but not defined a values its default value will be undefined.
 */
