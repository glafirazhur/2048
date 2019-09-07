import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './styles.css';

const CurrentScore = ({ scoreLabel, score }) => (
  <div className="score">
    <span className="score__label">{scoreLabel}</span>
    <span className="score__value">{score.currentScore}</span>
  </div>
);

CurrentScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
  scoreLabel: PropTypes.string,
};

CurrentScore.defaultProps = {
  scoreLabel: 'Your score',
};

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(CurrentScore);
