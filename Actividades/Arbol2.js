var data = [8, 10, 12, 5, 3, 6],
  tree;

function insertBinTree(t = { value: void 0, left: void 0, right: void 0 }, n) {
  t.value !== void 0 ? t.value > n ? t.left = insertBinTree(t.left, n) :
    t.right = insertBinTree(t.right, n) :
    t.value = n;
  return t;
}

tree = data.reduce(insertBinTree, void 0);
console.log(tree);