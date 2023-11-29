// O(n^3 + m) time And O(n + m) space
function numbersInPI(pi = "", numbers = []) {
  const numbersTable = numbers.reduce((acc, number) => {
    acc[number] = true;
    return acc;
  }, {});
  const minSpaces = getMinSpaces({}, 0);

  function getMinSpaces(cache, idx) {
    if(idx === pi.length) {
      /* *** */
      return -1;
    }
    if(idx in cache) {
      return cache[idx];
    }

    let minSpaces = Infinity;

    for(let i = idx; i < pi.length; i++) {
      let prefix = pi.slice(idx, i + 1);

      if(prefix in numbersTable) {
        let minSpacesInSuffix = getMinSpaces(cache, i + 1);

        minSpaces = Math.min(minSpaces, minSpacesInSuffix + /* *** */ 1);
      }
    }

    cache[idx] = minSpaces;

    return cache[idx];
  }
  
  return minSpaces === Infinity ? -1 : minSpaces;
}

function numbersInPI(pi = "", numbers = []) {
  const numbersTable = numbers.reduce((acc, number) => {
    acc[number] = true;
    return acc;
  }, {});
  const cache = {};
  
  for(let i = pi.length; i >= 0; i--) {
    getMinSpaces(cache, i);
  }

  function getMinSpaces(cache, idx) {
    if(idx === pi.length) {
      /* *** */
      return -1;
    }
    if(idx in cache) {
      return cache[idx];
    }

    let minSpaces = Infinity;

    for(let i = idx; i < pi.length; i++) {
      let prefix = pi.slice(idx, i + 1);

      if(prefix in numbersTable) {
        let minSpacesInSuffix = getMinSpaces(cache, i + 1);

        minSpaces = Math.min(minSpaces, minSpacesInSuffix + /* *** */ 1);
      }
    }

    cache[idx] = minSpaces;

    return cache[idx];
  }
  
  return cache[0] === Infinity ? -1 : cache[0];
}

console.log(numbersInPI('3141592', [3141,5,31,2,4159,9,42]))
