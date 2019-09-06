import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateBestScore } from '../../Redux/actions/scoreActions';

import './styles.css';

const BestScore = (props) => {
  const { bestScore, scoreLabel } = props;

  useEffect(() => {
    props.updateBestScore();
  },[]);

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
  updateBestScore: () => dispatch(updateBestScore),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestScore);
