import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {
        results.map(({word, id}) => (
          <p key={id} className="guess">{word}</p>
        ))
      }
    </div>

  );
}

export default GuessResults;
