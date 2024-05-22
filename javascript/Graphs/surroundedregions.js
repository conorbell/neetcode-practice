/**
 Given an 'm x n' matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

 A region is captured by flipping all 'O's into 'X's in that surrounded region.


Ex 1:
 Input: board = 
 [["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]]
 
 
 Output: 
 [["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","O","X","X"]]
  
 Explanation: Notice that an 'O' should not be flipped if:
 - It is on the border, or
 - It is adjacent to an 'O' that should not be flipped.
 The bottom 'O' is on the border, so it is not flipped.
 The other three 'O' form a surrounded region, so they are flipped.




 Ex 2:
 Input: board = [["X"]]
 Output: [["X"]]
 */

const capture = (board) => {
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] === 'Visited' ||
      board[i][j] === 'X'
    )
      return;

    board[i][j] = 'Visited';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        board[i][j] === 'O' &&
        (i === 0 ||
          j === 0 ||
          i === board.length - 1 ||
          j === board[0].length - 1)
      ) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'Visited') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
  return board;
};

console.log(
  capture([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
);
// console.log(capture([["X"]]))

// n1 <-> n2 <-> n3 <-> n4 <-> n1
/*
             n1
        n2         n3
    n4     n5   n6     n7
  */
