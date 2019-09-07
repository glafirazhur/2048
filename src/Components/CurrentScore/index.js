import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const CurrentScore = ({ score }) => (
  <div className="score">
    <span className="score__label">Your score</span>
    <span className="score__value">{score.currentScore}</span>
  </div>
);

CurrentScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CurrentScore;
