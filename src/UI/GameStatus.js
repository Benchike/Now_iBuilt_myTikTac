import React from 'react';
import './GameStatus.css';

function GameStatus(props) {
  const winner = props.OncallWinner;

  let status;
  if (winner) {
    status = `Player: ${winner} is the Winner 🏆`;
  } else {
    status = `Next Player is ${props.OnplayerX ? 'X' : 'O'}`;
  }

  return <div className="status">{status}</div>;
}

export default GameStatus;
