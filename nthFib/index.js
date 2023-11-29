// Time : O(2**n)
// space: O(n)
/* function getNthFib(n){
  if(n === 2){
    return 1;
  }else if(n === 1){
    return 0;
  }else{
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
} */

// time = O(n) , space = O(n)
/* function getNthFib(n){
  let memoize = {
    1: 0,
    2: 1,
  }

  function getNthFibHelper(n){
    if(n in memoize){
      return memoize[n];
    }else{
      memoize[n] = getNthFibHelper(n - 1) + getNthFibHelper(n - 2);
      return memoize[n];
    }
  }
  
  return getNthFibHelper(n);
} */

// time = O(n) and space= O(1)
/* function getNthFib(n){
  let lastTwos = [0,1],
      counter = 3;

  while(counter <= n){
    let nextFib = lastTwos[0] + lastTwos[1];

    lastTwos[0] = lastTwos[1];
    lastTwos[1] = nextFib;

    counter++;
  }

  return n > 2 ? lastTwos[1] : lastTwos[0];
} */
