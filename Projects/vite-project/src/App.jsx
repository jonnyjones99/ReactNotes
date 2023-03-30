import { useState } from "react";

function Square({ value, squareClicked }) {
	return (
		<button className="square" onClick={squareClicked}>
			{value}
		</button>
	);
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

  function clickHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquare = squares.slice();

    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquares(nextSquare);
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


	return (
		<>     
    <div className="status">{status}</div>
			<div className="wrap">
				<Square value={squares[0]} squareClicked={() => clickHandler(0)} />
				<Square value={squares[1]} squareClicked={() => clickHandler(1)} />
				<Square value={squares[2]} squareClicked={() => clickHandler(2)} />
				<Square value={squares[3]} squareClicked={() => clickHandler(3)} />
				<Square value={squares[4]} squareClicked={() => clickHandler(4)} />
				<Square value={squares[5]} squareClicked={() => clickHandler(5)} />
				<Square value={squares[6]} squareClicked={() => clickHandler(6)} />
				<Square value={squares[7]} squareClicked={() => clickHandler(7)} />
				<Square value={squares[8]} squareClicked={() => clickHandler(8)} />
			</div>
		</>
	);
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
