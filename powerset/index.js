// space = O(2^n) time = O(n^2 * 2^n)
function PowerSet(array = []) {
  const powersets = [[]];

  for(let i = 0; i < array.length; i++) { // n
    const powersetLength = powersets.length;
    for(let j = 0; j < powersetLength; j++) { // p = 2^n
      const copyCurrPowerset = powersets[j].slice(); // n

      copyCurrPowerset.push(array[i]);
      powersets.push(copyCurrPowerset);
    }
  }
  
  return powersets;
}

console.log( 
PowerSet([1,2,3])
)
