function removeDuplicates(nums) {
  let i = 0;
  for (let num of nums) {
    if (i < 2 || nums[i - 2] !== num) {
      nums[i] = num;
      i++;
    }
  }
  return i;
}

const nums = [1, 1, 1, 1, 2, 2, 2, 3];
console.log(removeDuplicates(nums));