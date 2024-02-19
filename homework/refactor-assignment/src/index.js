'use strict';

/*
    This function finds matched line like bingo on
    3*3 board with the number you decide (player).

    board ... 2D array of 3 * 3
    player ... corresponding number to see if they win
*/
function findBingo(board, player) {
  // Arrow Function for checking to see if the cell matched to the player #
  /* <NOTE>
   * row.every ... Check the condition in every elements in the arrow
   * cell = the value of each item
   */
  const isMatchingRow = row => row.every(cell => cell === player);

  // Check horizontal and vertical lines
  for (let i = 0; i < board.length; i+=1) {
    if (isMatchingRow(board[i]) || isMatchingRow(board.map(row => row[i])))
      return true;
  }

  // Check diagonal lines
  if (isMatchingRow([board[0][0], board[1][1], board[2][2]]) ||
      isMatchingRow([board[0][2], board[1][1], board[2][0]]))
    return true;

  // If none of them have applied, return false
  return false;
}

// players
const PLAYER1 = 1;
const PLAYER2 = 2;


console.log(
  findBingo(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    PLAYER2
  )
);

console.log(
  findBingo(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    PLAYER1
  )
);

console.log(
  findBingo(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    PLAYER2
  )
);
