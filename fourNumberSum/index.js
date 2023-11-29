// Time = O(N^2) and Space = O(N^2)
function fourNumberSum(numbers = [], target) {
  const answer = [],
  duplets = {};

  for(let i = 1; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      let difference = target - (numbers[i] + numbers[j]);

      if(difference in duplets) {
        for(let duplet of duplets[difference]) {
          answer.push([...duplet, numbers[i], numbers[j]]);
        }
      }
    }

    for(let j = 0; j < i; j++) {
      const dupletSum = numbers[i] + numbers[j];
      
      if(dupletSum in duplets) {
        duplets[dupletSum].push([numbers[i], numbers[j]]);
      }else {
        duplets[dupletSum] = [[numbers[i], numbers[j]]];
      }
    }
  }

  return answer;
}

console.log(
  fourNumberSum([7,6,4,-1,1,2], 16)
)
