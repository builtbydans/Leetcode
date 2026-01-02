/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;

  let stack = [];
  const matching = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const last = stack.pop();

      if (last !== matching[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("{[()]}")); // true
console.log(isValid("")); // true (empty string is valid)

console.log(isValid("(")); // false
console.log(isValid("]")); // false
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[(])}")); // false
console.log(isValid("(((")); // false
