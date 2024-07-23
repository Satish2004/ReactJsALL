import React, { useState } from "react";

const LudoCount = () => {
  let [Moves, setMoves] = useState({
    blue: 0, 
    green: 0,
    yellow: 0,
    red: 0,
  });

  let updateRedBox = () => {
    Moves.red += 1; //initially i have been updating my red value +1 then make a new object copy as such spread operator(...)
    // because object or array doesnot support direct upadate we can change their key or index value but after that we create copy of them
    setMoves({ ...Moves });
  };

  let updateBlueBox = () => {
    Moves.blue += 2;
    setMoves({ ...Moves });
  };

  let updateGreenBox = () => {
    Moves.green += 1;
    setMoves({ ...Moves });
  };

  let updateYellowBox = () => {
    Moves.yellow += 1;
    setMoves({ ...Moves });
  };
  return (
    <>
      <h2>Gamme Begin!!</h2>
      <p>Blue Move={Moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlueBox}>
        +1
      </button>
      <p>Yellow Move={Moves.yellow}</p>
      <button
        style={{ backgroundColor: "Yellow", color: "black" }}
        onClick={updateYellowBox}
      >
        +1
      </button>
      <p>Green Move={Moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={updateGreenBox}>
        +1
      </button>
      <p>Red Move={Moves.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={updateRedBox}>
        +1
      </button>
    </>
  );
};

export default LudoCount;
