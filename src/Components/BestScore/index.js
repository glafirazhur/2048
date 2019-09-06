import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateBestScoreAction } from '../../Redux/actions/scoreActions';

import './styles.css';

const BestScore = (props) => {
  const { bestScore, scoreLabel, updateBestScore } = props;

  useEffect(() => {
    updateBestScore(10);
  },[updateBestScore]);

  return (
    <div className="score">
      <span className="score__label">{scoreLabel}</span>
      <span className="score__value">{bestScore}</span>
    </div>
  );
};

BestScore.propTypes = {
  bestScore: PropTypes.number,
  scoreLabel: PropTypes.string,
  updateBestScore: PropTypes.func.isRequired,
};

BestScore.defaultProps = {
  bestScore: 0,
  scoreLabel: 'Your score',
};

const mapStateToProps = (state) => ({ bestScore: state.bestScore });

const mapDispatchToProps = (dispatch) => ({
  updateBestScore: (value) => dispatch(updateBestScoreAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
