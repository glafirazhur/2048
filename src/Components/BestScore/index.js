import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './styles.css';

const BestScore = ({ score, scoreLabel }) => (
  <div className="score">
    <span className="score__label">{scoreLabel}</span>
    <span className="score__value">{score.bestScore}</span>
  </div>
);

BestScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
  scoreLabel: PropTypes.string,
};

BestScore.defaultProps = {
  scoreLabel: 'Your score',
};

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(BestScore);
