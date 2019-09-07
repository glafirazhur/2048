import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const BestScore = ({ score }) => (
  <div className="score">
    <span className="score__label">Best score</span>
    <span className="score__value">{score.bestScore}</span>
  </div>
);

BestScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default BestScore;
