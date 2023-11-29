// space = O(wn) w->(Word) n->(max string length) | time=O(w*n*log(n))
function groupAnagrams(words){
  const anagram = {};
  let sortedWord = null;

  for(let word of words){
    sortedWord = word.split('').sort().join('');

    if(sortedWord in anagram){
      anagram[sortedWord].push(word);
    }else {
      anagram[sortedWord] = [word]
    }
  }

  return Object.values(anagram);
}
