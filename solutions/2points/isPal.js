const isPalindrome = function (s) {
  //i: string
  //o: boolean

  //remove non-alphanumeric characters from string
  s = s.replace(/[\W _]/gi, '').toLowerCase();
  //create two pointers
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
