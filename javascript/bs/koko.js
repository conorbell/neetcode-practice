/* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.*/

/* 
length of piles must be <= h
*/
var minEatingSpeed = function (piles, h) {
  let l = 1,
    r = Math.max(...piles),
    best = r;

  const time = (speed) =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  do {
    const mid = Math.floor((l + r) / 2);

    if (time(mid) <= h) {
      best = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  } while (l <= r);
  return best;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
