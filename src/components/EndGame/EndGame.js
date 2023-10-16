import React from 'react';


function EndGame({ gameState, numOfGuesses, answer}) {

  const winComponents = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {
            numOfGuesses === 1
              ? '1 guess'
              : `${numOfGuesses} guesses`
          }
        </strong>.
      </p>
    </div>
  )
  
  const loseComponents = (
    <div className="sad banner">
      <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>
    </div>
  )
  
  return <>
    {
      gameState === 'won'
        ? winComponents
        : loseComponents
    }
  </>;
}

export default EndGame;
