var romanToInt = function (s) {
  const romanObj = {
    I: 1,
    V: 5,
    IV: 4,
    IX: 9,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let f = 0;
  let n = 1;

  while (n <= s.length) {
    if (s[f] === 'C' && s[n] === 'M') {
      sum += romanObj[s[n]] - 100;
      f = n;
      n++;
    } else if (s[f] === 'C' && s[n] === 'D') {
      sum += romanObj[s[n]] - 100;
      f = n;
      n++;
    } else if (s[f] === 'I' && s[n] === 'V') {
      sum += romanObj[s[n]] - 1;
      f = n;
      n++;
    } else if (s[f] === 'I' && s[n] === 'X') {
      sum += romanObj[s[n]] - 1;
      f = n;
      n++;
    } else if (s[f] === 'X' && s[n] === 'L') {
      sum += romanObj[s[n]] - 10;
      f = n;
      n++;
      console.log(romanObj[s[n]]);
    } else if (s[f] === 'X' && s[n] === 'C') {
      sum += romanObj[s[n]] - 10;
      f = n;
      n++;
    } else {
      sum += romanObj[s[f]];
    }

    f = n;
    n++;
  }

  return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
