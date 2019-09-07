import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import { clearScoreAction } from '../../Redux/actions/scoreActions';

const StartButton = ({ btnText, clearScore }) => <button type="button" className="start-button" onClick={clearScore}>{btnText}</button>;

StartButton.propTypes = {
  btnText: PropTypes.string,
  clearScore: PropTypes.func.isRequired,
};

StartButton.defaultProps = {
  btnText: 'Start',
};

const mapStateToProps = (state) => ({ score: state.score });
const mapDispatchToProps = (dispatch) => ({
  clearScore: () => dispatch(clearScoreAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
