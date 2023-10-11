import React from 'react';

function Guess({ results, setResults }) {

  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([ ...results, {
      word: guess,
      id: crypto.randomUUID()
    }])
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e)=>{
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Guess;
