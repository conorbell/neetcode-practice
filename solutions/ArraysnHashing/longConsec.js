const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let longest = 0;
  console.log('Initial set:', set);

  for (let n of nums) {
    console.log('Checking number:', n);

    if (!set.has(n - 1)) {
      console.log('Starting a new sequence from:', n);

      length = 0;
      while (set.has(n + length)) {
        length++;
        console.log('Sequence length:', length);
      }
      longest = Math.max(length, longest);
      console.log('Final longest consecutive sequence:', longest);
    }
  }
  return longest;
};
