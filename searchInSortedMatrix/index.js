// time = O(n + m) and space = O(1)
function searchInSortedMatrix(matrix = [], target) {
  let col;
  
  matrixRow: for(let row = 0; row < matrix.length; row++) {
    for(col = matrix[row].length - 1; col >= 0; col--) {
      if(matrix[row][col] === target) {
        return [row,col];
      }else if(matrix[row][col] > target) {
        continue;
      }else{
        continue matrixRow;
      }
    }
  }

  return [-1, -1];
}

function searchInSortedMatrix(matrix = [], target) {
  let col = matrix[0].length - 1,
  row = 0;

  while(row < matrix.length && col >= 0) {
    if(target === matrix[row][col]) {
      return [row, col];
    }else if(target < matrix[row][col]) {
      col--;
    }else {
      row++;
    }
  }

  return [-1, -1];
}
