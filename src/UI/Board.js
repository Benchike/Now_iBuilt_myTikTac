import React, { useState } from 'react';
import './Board.css';
import GameStatus from './GameStatus';
import Square from './Square';

function Board() {
  const [playerX, setPlayerX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winCaller = callWinner(squares);
  const clickHandler = (i) => {
    if (winCaller || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (playerX) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    console.log(nextSquares);
    setSquares(nextSquares);
    setPlayerX(!playerX);
  };

  return (
    <div>
      <GameStatus OncallWinner={winCaller} OnplayerX={playerX} />
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => clickHandler(0)} />
        <Square value={squares[1]} onSquareClick={() => clickHandler(1)} />
        <Square value={squares[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => clickHandler(3)} />
        <Square value={squares[4]} onSquareClick={() => clickHandler(4)} />
        <Square value={squares[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => clickHandler(6)} />
        <Square value={squares[7]} onSquareClick={() => clickHandler(7)} />
        <Square value={squares[8]} onSquareClick={() => clickHandler(8)} />
      </div>
    </div>
  );
}

const callWinner = (squares) => {
  const winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winArray.length; i++) {
    const [a, b, c] = winArray[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
