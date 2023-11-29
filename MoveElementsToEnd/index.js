// time O(n) ans space O(1)
function moveElementsToEnd(array = [], target) {
  let i = 0,
  j = array.length - 1;

  while(i <= j) {
    if(array[j] === target) {
      j--;
      continue;
    }

    if(array[i] !== target) {
      i++;
      continue
    }

    [array[i],array[j]] = [array[j],array[i]];
    (i++, j--);
  }

  return array;
}

console.log(
moveElementsToEnd([2,4,1,4,4,0,1,2,3,5,4,4,4,10,3,20,15],4)
)
