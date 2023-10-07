import React, { useState } from "react";

const InBox = (props) => {
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  }

  const handleClick = () => {
    const isCorrect = guess.toLowerCase() === props.name.toLowerCase();
    setCorrect(isCorrect);
  }

  return (
    <div className="input-container">
      <label className="input-title" htmlFor="guess">Guess:</label>
      <input
        className={`input-text ${correct ? 'highlight' : ''}`}
        type="text"
        id="guess"
        value={guess}
        onChange={handleInputChange}
      />
      <button className="input-button" onClick={handleClick}>Go!</button>
    </div>
  );
}

export default InBox;
