/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /* for(let i=0;i<nums.length;i++){
         for(let j=i+1;j<nums.length && j!=i;j++){
             if(nums[i]+nums[j]==target){
                 return [i,j];
             }
         }
     }
     */

  let storage = {};

  for (let [key, value] of nums.entries()) {
    if (storage[value] !== undefined) return [storage[value], key];
    storage[target - value] = key;
  }
};
