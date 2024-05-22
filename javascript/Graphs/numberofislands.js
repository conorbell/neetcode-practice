/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

// const explore = (row, col, grid) => {
//   if (
//     row < 0 ||
//     col < 0 ||
//     row >= grid.length ||
//     col >= grid[row].length ||
//     grid[row][col] === '0'
//   ) {
//     return;
//   }

//   grid[row][col] = '0';

//   explore(row, col + 1, grid);
//   explore(row, col - 1, grid);
//   explore(row + 1, col, grid);
//   explore(row - 1, col, grid);
// };

// const numIslands = (grid) => {
//   let count = 0; //counted islands

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] === '1') {
//         count++;
//         explore(row, col, grid);
//       }
//     }
//   }
//   return count;
// };

const numIslands = (grid) => {
  if (!grid) return 0;

  const visit = new Set();
  let islands = 0;

  const bfs = (r, c) => {
    const q = [];
    visit.add(`${r},${c}`);
    q.unshift([r, c]);

    while (q.length) {
      let [row, col] = q.pop();
      let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (let [dr, dc] of directions) {
        let newRow = row + dr,
          newCol = col + dc;
        if (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[0].length &&
          grid[newRow][newCol] === '1' &&
          !visit.has(`${newRow},${newCol}`)
        ) {
          q.unshift([newRow, newCol]);
          visit.add(`${newRow},${newCol}`);
        }
      }
    }
  };

  for (let rows = 0; rows < grid.length; rows++) {
    for (let cols = 0; cols < grid[rows].length; cols++) {
      if (grid[rows][cols] === '1' && !visit.has(`${rows},${cols}`)) {
        bfs(rows, cols);
        islands += 1;
      }
    }
  }
  return islands;
};
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
module.exports = numIslands;
