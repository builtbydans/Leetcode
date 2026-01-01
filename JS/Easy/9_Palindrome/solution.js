/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
