function sameBsts(arr1 = [], arr2 = []) {
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
    return false;
  }

  const rootElem = arr1[0];

  let leftArray1 = [], leftArray2 = [], rightArray1 = [], rightArray2 = [];

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < rootElem) leftArray1.push(arr1[i])
    else rightArray1.push(arr1[i]);

    if (arr2[i] < rootElem) leftArray2.push(arr2[i])
    else rightArray2.push(arr2[i]);
  }

  const leftResult = sameBsts(leftArray1, leftArray2);

  if (leftResult) {
    return sameBsts(rightArray1, rightArray2);
  }
}

console.log(sameBsts([8, 3, 6, 1, 4, 7, 10, 14, 13], [8, 10, 14, 3, 6, 4, 1, 7, 13]))
