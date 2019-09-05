import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Score = ({ scoreValue, scoreLabel }) => (
  <div className="score">
    <span className="score__label">{scoreLabel}</span>
    <span className="score__value">{scoreValue}</span>
  </div>
);

Score.propTypes = {
  scoreValue: PropTypes.number,
  scoreLabel: PropTypes.string,
};

Score.defaultProps = {
  scoreValue: 0,
  scoreLabel: 'Your score',
};


export default Score;
