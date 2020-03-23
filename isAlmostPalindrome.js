/**
 *
 * @param word {string}
 */
function isPalindrome(word) {
  for (let i = 0; i < word.length; i++)
    if (word[i] != word[word.length - i - 1]) return false;
  return true;
}
/**
 *
 * @param word {string}
 * @param i {number}
 */
function removeByIndex(word, i) {
  return i == 0 ? word.slice(1) : word.substr(0, i - 1) + word.substring(i);
}
/**
 *
 * @param word {string}
 */
function isAlmostPalindrome(word) {
  // whitespace removed
  word = word.replace(/ /g, "");
  if (isPalindrome(word)) return true;
  else {
    let i = 0;
    let newWord = removeByIndex(word, i);
    while (newWord.length > 1) {
      if (isPalindrome(newWord)) return true;
      else {
        i++;
        newWord = removeByIndex(newWord, i);
      }
    }
    return false;
  }
}
