import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateCurrentScore } from '../../Redux/actions/scoreActions';

import './styles.css';

const CurrentScore = (props) => {
  const { currentScore, scoreLabel } = props;

  useEffect(() => {
    props.updateCurrentScore();
  },[]);

  return (
    <div className="score">
      <span className="score__label">{scoreLabel}</span>
      <span className="score__value">{currentScore}</span>
    </div>
  );
};

CurrentScore.propTypes = {
  currentScore: PropTypes.number,
  scoreLabel: PropTypes.string,
  updateCurrentScore: PropTypes.func.isRequired,
};

CurrentScore.defaultProps = {
  currentScore: 0,
  scoreLabel: 'Your score',
};

const mapStateToProps = (state) => ({ currentScore: state.currentScore });
const mapDispatchToProps = (dispatch) => ({
  updateCurrentScore: () => dispatch(updateCurrentScore),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentScore);
