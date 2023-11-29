class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.constructSuffixTrieFrom(string);
  }

  // Time = O(N^2) Space = O(N^2) worst case
  constructSuffixTrieFrom(string = '') {
    for(let suffix = 0; suffix < string.length; suffix++) {
      let currentNode = this.root;
      
      for(let letter = suffix; letter < string.length; letter++) {
        if(!(string[letter] in currentNode)) {
          currentNode[string[letter]] = {};
        }
        
        currentNode = currentNode[string[letter]];
      }
      
      currentNode[this.endSymbol] = true; 
    }

    return this;
  }

  // Time = O(M) space = O(1)
  contains(string = '') {
    let currentNode = this.root;

    for(let i = 0; i < string.length; i++) {
      if(string[i] in currentNode) {
        currentNode = currentNode[string[i]];
      } else {
        return false;
      }
    }

    return this.endSymbol in currentNode;
  }
}
