/* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.*/

var minEatingSpeed = function (piles, h) {
  let min = 1,
    max = Math.max(...piles),
    best = max;

  const time = (speed) =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (time(mid) <= h) {
      best = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return best;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
