import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import { initGameThunkAction } from '../../Redux/actions/gameActions';

const StartButton = ({ initGame }) => <button type="button" className="start-button" onClick={initGame}>Start again</button>;

StartButton.propTypes = {
  initGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.score,
  gameStatus: state.gameStatus,
  tiles: state.tiles,
});
const mapDispatchToProps = (dispatch) => ({
  initGame: () => dispatch(initGameThunkAction()),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(StartButton));
