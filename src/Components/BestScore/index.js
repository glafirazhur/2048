import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';

const BestScore = ({ score }) => (
  <div className="score">
    <span className="score__label">Best score</span>
    <span className="score__value">{score.bestScore}</span>
  </div>
);

BestScore.propTypes = {
  score: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(BestScore);
