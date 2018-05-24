const find = (l, r, nums, target) => {
  const mid = Math.floor((l + r) / 2);

  if (nums[mid] === target) return mid;

  if (l === r) {
    return nums[l] === target ? l : -1;
  }

  if (nums[l] <= nums[mid]) {
    const isInRange = target >= nums[l] && target <= nums[mid];
    if (isInRange) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    return find(l, r, nums, target);
  }

  const isInRange = target > nums[mid] && target <= nums[r];

  if (isInRange) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }

  return find(l, r, nums, target);
};

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  return find(l, r, nums, target);
};
