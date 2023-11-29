function hasSingleCycle(array = []) {
  let numElementsVisited = 0,
  currentIdx = 0;

  function getNextIndex() {
    let jump = array[currentIdx],
    nextIdx = (jump + currentIdx) % array.length;

    return nextIdx >= 0 ? nextIdx : (array.length + nextIdx);
  }

  while(numElementsVisited < array.length) {
    if(numElementsVisited > 0 && currentIdx === 0) {
      return false;
    }

    numElementsVisited++;
    currentIdx = getNextIndex();
  }

  return currentIdx === 0;
};
