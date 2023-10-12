import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [results, setResults] = React.useState([]);

  const handleSubmitResult = (guess) => {
    setResults([ ...results, {
      word: guess,
      id: crypto.randomUUID()
    }])
    console.log(results);
  }

  return (
    <>
      <GuessResults results={results}/>
      <GuessInput
        handleSubmitResult={handleSubmitResult}
        results={results}
      />
    </>
  );
}

export default Game;
