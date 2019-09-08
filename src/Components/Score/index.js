import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';

const Score = ({ score, scoreType }) => {
  const scoreLabel = scoreType === 'current' ? 'Your score' : 'Best score';
  const scoreValue = scoreType === 'current' ? score.currentScore : score.bestScore;

  return (
    <div className="score">
      <span className="score__label">{scoreLabel}</span>
      <span className="score__value">{scoreValue}</span>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
  scoreType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ score: state.score });

export default React.memo(connect(mapStateToProps)(Score));
