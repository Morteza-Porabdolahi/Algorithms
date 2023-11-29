// Time: O(n^2*n!) || space: O(n*n!)

/* function getPermutations(arr) {
  if(arr.length === 0) return [];
  
  function getPermutationsHelper(arr, perm, perms) {
    if (arr.length === 0) {
      perms.push(perm);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let newArr = arr.toSpliced(i, 1); // O(n);
        let newPerm = [...perm];

        newPerm.push(arr[i]);
        getPermutationsHelper(newArr, newPerm, perms);
      }

      return perms;
    }
  }

  return getPermutationsHelper(arr, [], []);
} */

// Time: O(n!*n) | space: O(n*n!)

/* function getPermutations(arr){
  if(arr.length === 0) return [];
  
  function swap(arr, i, j){
    [arr[i],arr[j]] = [arr[j], arr[i]];
  }

  function getPermutationsHelper(arr, i, perms){
    if(i === arr.length - 1){
      perms.push([...arr]);
    }else{
      for(let j = i; j < arr.length; j++){
        swap(arr, i, j);
        getPermutationsHelper(arr, i + 1, perms);
        swap(arr, i, j);
      }

      return perms;
    }
  }

  return getPermutationsHelper(arr, 0, []);
} */
