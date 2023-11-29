const river = [
  '1 0 0 1 0'.split(' '),
  '1 0 1 0 0'.split(' '),
  '0 0 1 0 1'.split(' '),
  '1 0 1 0 1'.split(' '),
  '1 0 1 1 0'.split(' '),
]

// time O(wh) and space O(wh) w = width of matrix and h = height of the matrix
function riverSize(matrix) {
  const visited = matrix.map(row => row.map(() => false)),
  riverSizes = [];

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++) {
      if(!visited[row][col]) {
        let currRiverSize = 0,
        nodesToExplore = [[row, col]];

        while(nodesToExplore.length !== 0) {
          let [row, col] = nodesToExplore.pop();

          if(visited[row][col]) continue;
          visited[row][col] = true;
          if(matrix[row][col] === '0') continue;

          currRiverSize++;
          let unvisitedNodes = getUnvisitedNodes(row, col);

          nodesToExplore.push(...unvisitedNodes);
        }

        if(currRiverSize > 0) riverSizes.push(currRiverSize);
      }
    }
  }

  function getUnvisitedNodes(row, col) {
    let unvisited = [];

    if(row > 0 && !visited[row - 1][col]) {
      unvisited.push([row - 1, col]);
    }
    if(row < matrix.length - 1 && !visited[row + 1][col]) {
      unvisited.push([row + 1, col]);
    }
    if(col > 0 && !visited[row][col - 1]) {
      unvisited.push([row, col - 1]);
    }
    if(col < matrix[row].length - 1 && !visited[row][col + 1]) {
      unvisited.push([row, col + 1]);
    }

    return unvisited;
  }

  return riverSizes;
}

console.log( 
riverSize(river)
)
