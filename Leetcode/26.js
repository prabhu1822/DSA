/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let inx = 0;

    for(let i=0 ; i < nums.length ; i++){
        if(nums[i] > nums[inx]){
            inx = inx+1;
            nums[inx] = nums[i];
        }
    }

    return inx+1;

};