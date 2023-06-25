function moveZeroes(nums) {
    let count = 0; // Count of non-zero elements
  
    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[count] = nums[i];
        count++;
      }
    }
  
    // Fill the remaining positions with zeroes
    while (count < nums.length) {
      nums[count] = 0;
      count++;
    }
  }
  const nums = [1,0,0,4,8,9];
  moveZeroes(nums);
  console.log(nums);