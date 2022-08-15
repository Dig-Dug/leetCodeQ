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
 * @return {boolean}
 */

  
 const checkTree = root => {
  return root.val === root.left.val + root.right.val 
};




function v (ar){
 // console.log(ar);
  let nu = []; let n = 0;
  for(n in ar){
    let i  = 1;
    ar = [ (n + i) * i ]; i++
   console.log( ar);
   return ar;
  }
 
}

let ar = [1,2,3,4]
v(ar)

