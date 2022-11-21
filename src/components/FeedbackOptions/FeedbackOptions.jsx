import React from 'react';

const FeedbackOptions = options => {
  return (
    <ul>
      {options.map(({ option }) => (
        <li key={option}>
          <button></button>
        </li>
      ))}
      ;
    </ul>
  );
};
export default FeedbackOptions;
