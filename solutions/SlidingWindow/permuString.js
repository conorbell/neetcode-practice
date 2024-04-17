const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  let freqMap = new Map();

  for (let c of s1) {
    if (freqMap.has(c)) {
      freqMap.set(c, freqMap.get(c) + 1);
    } else {
      freqMap.set(c, 1);
    }
  }

  let l = 0,
    r = 0,
    reqLength = s1.length;

  while (r < s2.length) {
    if (freqMap.get(s2[r]) > 0) reqLength--;

    freqMap.set(s2[r], freqMap.get(s2[r]) - 1);
    r++;

    if (reqLength === 0) return true;

    if (r - l === s1.length) {
      if (freqMap.get(s2[l]) >= 0) reqLength++;
      freqMap.set(s2[l], freqMap.get(s2[l]) + 1);
      l++;
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo')); //true
console.log(checkInclusion('ab', 'eidboaoo')); //false
