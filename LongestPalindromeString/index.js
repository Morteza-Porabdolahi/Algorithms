// O(n^2) time and O(1) space
function longestPalindromicSubstirng(str = '') {
  function getLongestPalindromeFrom(str, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < str.length) {
      if (str[leftIdx] !== str[rightIdx]) {
        break;
      } else {
        leftIdx--;
        rightIdx++;
      }
    }

    return [leftIdx + 1, rightIdx];
  }

  let currentLongest = [0, 1];

  for (let i = 1; i < str.length; i++) {
    let odd = getLongestPalindromeFrom(str, i - 1, i + 1),
      even = getLongestPalindromeFrom(str, i - 1, i),
      longest = [];
    
    if (odd[1] - odd[0] > even[1] - even[0]) {
      longest = [odd[0], odd[1]];
    } else {
      longest = [even[0], even[1]];
    }

    if (longest[1] - longest[0] > currentLongest[1] - currentLongest[0]) {
      currentLongest = longest;
    }
  }


  return str.slice(currentLongest[0], currentLongest[1]);
}
