import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {
          range(5).map((num) => (
            <span className='cell' key={num}>
              { value ? value.word[num] : '' }
            </span>
          ))
        }
      </p>
    </div>
  );
}

export default Guess;
