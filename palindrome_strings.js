// Palindrome strings
//
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
//
// true == is_palindrome("anna")
// false == is_palindrome("walter")


function isPalindrome(line) {
  var  x = Math.floor(line.length /2);
  for (i=0; i<x; i++)
    if (line[i] !== line[line.length - i - 1])
    return undefined;
    return true;
}




//Alternate Solution:

function isPalindrome(line) {
  return (line.toString() == line.toString().split('').reverse().join(''));
}
