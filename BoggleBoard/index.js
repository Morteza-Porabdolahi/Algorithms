class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  add(word = "") {
    let currentNode = this.root;
    
    for(let letter of word) {
      if(!currentNode[letter]) {
        currentNode[letter] = {};
      }

      currentNode = currentNode[letter];
    } 

    currentNode[this.endSymbol] = word;
  }
}

// m = width of the board, n = height of the board, s = longest word length in the words array, w = number of words in the array   => worst case time = O(nm*8^s + ws) || space = (nm + ws)

function boggleBoard(board, words = []) {
  const trie = new Trie();
  words.forEach(trie.add, trie);

  function getNeighbors(i, j) {
    let neighbors = [];
    if(i > 0) neighbors.push([i - 1, j]);
    if(j > 0) neighbors.push([i, j - 1]);
    if(i > 0 && j > 0) neighbors.push([i - 1, j - 1]);
    if(i > 0 && j < board.length - 1) neighbors.push([i - 1, j + 1]);
    if(i < board.length - 1) neighbors.push([i + 1, j]);
    if(j < board.length - 1) neighbors.push([i, j + 1]);
    if(j > 0 && i < board.length - 1) neighbors.push([i + 1, j - 1]);
    if(j < board.length - 1 && i < board.length - 1) neighbors.push([i + 1, j + 1]);
    return neighbors;
  }

  let finalWords = {};
  let visited = board.map(row => row.map(() => false));

  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[row].length; col++) {
      explore(row, col, trie.root);
    }
  }
  
  function explore(i, j, trieNode) {
    if(visited[i][j]) return;

    let letter = board[i][j];
    
    if(!(letter in trieNode)) return;

    visited[i][j] = true;
    trieNode = trieNode[letter];

    if(trie.endSymbol in trieNode) {
      let word = trieNode[trie.endSymbol];
      finalWords[word] = true;
    }

    let neighbors = getNeighbors(i, j);

    for(let [i, j] of neighbors) {
      explore(i, j, trieNode);
    }
    // *** IMPORTANT ***
    // The beauty of recursion <3
    visited[i][j] = false;
  }

  return Object.keys(finalWords);
}

// Test case
const words = "this is not a simple boggle board test REPEATED NOTRE-PEATED".split(' ');
const board = "thisisa|simplex|bxxxxeb|xogglxo|xxxDTra|REPEAdx|xxxxxxx|NOTRE-P|xxDETAE".split('|').map(row => row.split(''))

console.log(
  boggleBoard(board, words)
)

