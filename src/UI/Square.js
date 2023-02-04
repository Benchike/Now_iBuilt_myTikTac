import React from 'react';
import './Square.css';

function Square(props) {
  // const [value, setValue] = useState(null);

  //   const clickHandler = () => {
  //     setValue('X');
  //   };

  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

export default Square;
