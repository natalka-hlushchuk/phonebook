import React from 'react';
import { StatList, StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>
        <p>Good: {good}</p>
      </StatItem>
      <StatItem>
        <p>Neutral: {neutral}</p>
      </StatItem>
      <StatItem>
        <p>Bad: {bad}</p>
      </StatItem>
      <StatItem>
        <p>Total: {total}</p>
      </StatItem>
      <StatItem>
        <p>Positive feedback: {positivePercentage}</p>
      </StatItem>
    </StatList>
  );
};

export default Statistics;

Statistics.protoTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
