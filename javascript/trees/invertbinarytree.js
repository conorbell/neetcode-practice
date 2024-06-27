function treeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/* 
invert tree, return root 

how does tree work? 
value on left has to be less than parent 
value on right has to be greater than parent

*/
function invertTree(root) {
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
}

const test1 = new treeNode(4);
test1.left = new treeNode(2);
test1.left.right = new treeNode(3);
test1.right = new treeNode(7);
test1.right.left = new treeNode(6);
test1.right.right = new treeNode(9);
console.log(invertTree(test1));

// const test2 = new treeNode(2);
// test2.left = new treeNode(1);
// test2.right = new treeNode(3);
// console.log(invertTree(test2));
