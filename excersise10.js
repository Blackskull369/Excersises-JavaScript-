function findLargest(nums) {
    let a = nums[0];
    for (let i =1; i < nums.length; i++) {
        if (nums[i] > a){
            a = nums[i];
        }
    }
    return a;
}
console.log(findLargest([-5, -2, -10]));