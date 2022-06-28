/*Traverse a Tree:
Pre-order Traversal, In-order Traversal, Post-order Traversal

************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let i = 0;
       for(i in root){
        console.log(root[i])
        console.log(root[i != null])
       }
   
   };
   
const results = [];

arr.forEach(element => {
  if (element !== null) {
    results.push(element);
  }
});

/* https://bobbyhadz.com/blog/javascript-remove-null-values-from-array */