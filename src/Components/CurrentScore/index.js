import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';

const CurrentScore = ({ score }) => (
  <div className="score">
    <span className="score__label">Your score</span>
    <span className="score__value">{score.currentScore}</span>
  </div>
);

CurrentScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(CurrentScore);
