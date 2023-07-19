/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const shortestWordLength = Math.min(...strs.map((word) => word.length));
  console.log(shortestWordLength);

  let prefix = "";
  for (let i = 0; i < shortestWordLength; i++) {
    currentChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentChar) return prefix;
    }

    prefix += currentChar;
  }
  return prefix;
};
