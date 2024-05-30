var maxAreaOfIsland = function (grid) {
  //maxArea
  let maxArea = 0;

  const visited = new Set();

  //dfs helper function
  //grid[r][c] = 1, r = 0, c = 2
  const dfs = (r, c) => {
    //out of bounds
    if (c < 0 || r < 0 || r >= grid.length || c >= grid[r].length) {
      return 0;
    }

    //if visited
    if (visited.has(`row: ${r}, col: ${c}`)) {
      return 0;
    }

    //if val is not there
    if (grid[r][c] !== 1) {
      return 0;
    }

    visited.add(`row: ${r}, col: ${c}`);

    let area = 1;

    area += dfs(r + 1, c, visited);
    area += dfs(r - 1, c, visited);
    area += dfs(r, c + 1, visited);
    area += dfs(r, c - 1, visited);

    return area;
  };

  //two for loops
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      //if current element is 1
      if (grid[r][c] === 1) {
        //invoke dfs on current element
        const area = dfs(r, c);
        console.log(area);

        //update maxArea
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};
