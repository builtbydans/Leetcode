/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  const firstWord = strs[0];
  let prefix = "";

  for (let posIndex = 0; posIndex < firstWord.length; posIndex++) {
    const char = firstWord[posIndex];

    for (let wordIndex = 0; wordIndex < strs.length; wordIndex++) {
      if (
        posIndex >= strs[wordIndex].length ||
        strs[wordIndex][posIndex] !== char
      ) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

console.log(
  longestCommonPrefix(["flower", "flow", "flight"]) // fl
);

console.log(longestCommonPrefix(["dog", "racecar", "car"])); // none
