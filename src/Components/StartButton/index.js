import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import { clearScoreAction } from '../../Redux/actions/scoreActions';
import { initGameAction } from '../../Redux/actions/tilesActions';

const StartButton = ({ clearScore, initGame }) => <button type="button" className="start-button" onClick={initGame}>Start again</button>;

StartButton.propTypes = {
  clearScore: PropTypes.func.isRequired,
  initGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ score: state.score });
const mapDispatchToProps = (dispatch) => ({
  initGame: () => dispatch(initGameAction()),
  clearScore: () => dispatch(clearScoreAction()),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(StartButton));
