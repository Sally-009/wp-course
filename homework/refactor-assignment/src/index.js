// eslint-disable-next-line global-strict
'use strict';

/*
    This function finds findBingo matched line like findBingo bingo on
    findBingo 3*3 board with the number you decide (key).

    board ... 2D array of 3 * 3
    key ... the number to search for the line
*/
function findBingo(board, key)
{
  for(let i=0; i<board.length; i+=1)
  {
      // Search for horizontal line
      if(board[i][0]===key && board[i][1]===key && board[i][2]===key)
        return true;
      // Search for vertical line
      if(board[0][i]===key && board[1][i]===key && board[2][i]===key)
        return true;
  }

  // Search for diagonal line
  if((board[0][0]===key && board[1][1]===key && board[2][2]===key)||(board[0][2]===key && board[1][1]===key && board[2][0]===key))
    return true;

  // If none of them have applied, return false
  return false;

}

console.log(
  findBingo(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    1
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
    2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  findBingo(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    1
  )
);

console.log(
  findBingo(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    2
  )
);
