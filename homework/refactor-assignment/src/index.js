'use strict';

/*
    This function finds matched line like bingo on
    3*3 board with the number you decide (player).

    board ... 2D array of 3 * 3
    player ... corresponding number to see if they win
*/
function findBingo(board, player)
{
  for(let i=0; i<board.length; i+=1)
  {
      // Search for horizontal line
      if(board[i][0]===player && board[i][1]===player && board[i][2]===player)
        return true;
      // Search for vertical line
      if(board[0][i]===player && board[1][i]===player && board[2][i]===player)
        return true;
  }

  // Search for diagonal line
  if((board[0][0]===player && board[1][1]===player && board[2][2]===player)||(board[0][2]===player && board[1][1]===player && board[2][0]===player))
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
