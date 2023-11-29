// time= O(m*n) && space = O(m*n)
function levenshtinDistance(str1 = '', str2 = '') {
  const edits = [[]];

  for (let i = 0; i <= str2.length; i++) {
    edits[0][i] = i;
  }

  for (let i = 1; i <= str1.length; i++) {
    edits[i] = [i];
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }

  return edits[str1.length][str2.length];
}

// time=O(n*m)  && space= O(min(m,n))
function optimizedLevenshtinDistance(str1 = '', str2 = '') {
  let smallStr = str1.length < str1.length ? str1 : str2,
    bigStr = str1.length > str2.length ? str1 : str2,
    evenEdits = [],
    oddEdits = [],
    currentEdits = [],
    previousEdits = [];

  for (let i = 0; i <= smallStr.length; i++) {
    evenEdits.push(i);
  }

  for (let i = 1; i <= bigStr.length; i++) {
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }

    currentEdits[0] = i;

    for (let j = 1; j <= smallStr.length; j++) {
      if (bigStr[i - 1] === smallStr[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j], previousEdits[j - 1], currentEdits[j - 1]);
      }
    }
  }

  return bigStr.length % 2 === 0 ? evenEdits.at(-1) : oddEdits.at(-1);
}
