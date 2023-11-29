function findLCA(tree, x, y) {
  if(tree === null) return null;
  if(tree.value === x.value || tree.value === y.value) return tree;

  const leftSearchResult = findLCA(tree.left, x, y);  
  const rightSearchResult = findLCA(tree.right, x, y);

  if(leftSearchResult === null) return rightSearchResult;
  if(rightSearchResult === null) return leftSearchResult;
  
  return tree;
}


