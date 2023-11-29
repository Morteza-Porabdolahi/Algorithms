// Time = O(d) d=depth of tree AND space = O(1)
function getYoungestCommonAncestor(topAncestor, decendantOne, decendantTwo) {
  let depthOfDecendantOne = calcDepth(decendantOne),
  depthOfDecendantTwo = calcDepth(decendantTwo);
  
  function calcDepth(decendant) {
    let depth = 0;
    
    while(decendant !== topAncestor) {
      depth++;
      decendant = decendant.ancestor;
    }

    return depth;
  }

  if(depthOfDecendantTwo > depthOfDecendantOne) {
    moveDecendantUp(decendantTwo, depthOfDecendantTwo - depthOfDecendantOne)
  } else {
    moveDecendantUp(decendantOne, depthOfDecendantOne - depthOfDecendantTwo)
  }

  function moveDecendantUp(lowerDecendant, howMuch) {
    while(howMuch !== 0) {
      lowerDecendant = lowerDecendant.ancestor;
      howMuch--;
    }
  }

  while(decendantOne !== decendantTwo) {
    decendantOne = decendantOne.ancestor;
    decendantTwo = decendantTwo.ancestor;
  }

  return decendantTwo;
}
