const treeify = (arr, pid) => {
  const tree = [];
  const lookup = {};
  // Initialize lookup table with each array item's id as key and 
  // its children initialized to an empty array 
  arr.forEach((o) => {
    lookup[o.id] = o;
    lookup[o.id].children = [];
  });
  arr.forEach((o) => {
    // If the item has a parent we do following:
    // 1. access it in constant time now that we have a lookup table
    // 2. since children is preconfigured, we simply Push the item

  });
  return tree;
};
const arr = [
  { id: 1, title: 'All', parent: null },
  { id: 2, title: 'Products', parent: 1 },
  { id: 3, title: 'Photoshop', parent: 2 },
  { id: 4, title: 'Illustrator', parent: 2 },
  { id: 4, title: 'Plugins', parent: 3 },
  { id: 5, title: 'Services', parent: 1 },
  { id: 6, title: 'Branding', parent: 5 },
  { id: 7, title: 'Websites', parent: 5 },
  { id: 8, title: 'Pen Testing', parent: 7 }
];
const render = (item, parent, level) => {
  const div = document.createElement('div');
  div.textContent = item.title;
  div.style.marginLeft = level * 8 + 'px';
  parent.appendChild(div);
  if (item.children.length) {
    item.children.forEach(child => render(child, div, ++level));
  }
  return parent;
}

treeify(arr)
  .map(item => render(item, fragment, 1))
  .map(frag => document.body.appendChild(frag))
console.log(arr)