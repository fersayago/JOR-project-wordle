import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import EndGame from "../EndGame";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // playing | won | lost
  const [gameState, setGameState] = React.useState("playing");
  const [results, setResults] = React.useState([]);

  const handleSubmitResult = (guess) => {
    const nextResults = [
      ...results,
      {
        word: guess,
        id: crypto.randomUUID(),
      },
    ];

    setResults(nextResults);

    if (guess === answer) {
      setGameState("won");
    }

    if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  };

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput
        handleSubmitResult={handleSubmitResult}
        gameState={gameState}
      />
      {gameState !== "playing" && (
        <EndGame
          gameState={gameState}
          answer={answer}
          numOfGuesses={results.length}
        />
      )}
    </>
  );
}

export default Game;
