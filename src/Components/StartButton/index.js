import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import { initGameThunkAction } from '../../Redux/actions/gameActions';

const StartButton = ({ initGame, children }) => <button type="button" className="start-button" onClick={initGame}>{ children }</button>;

StartButton.propTypes = {
  initGame: PropTypes.func.isRequired,
  children: PropTypes.string,
};

StartButton.defaultProps = {
  children: 'Start again',
};

const mapDispatchToProps = (dispatch) => ({
  initGame: () => dispatch(initGameThunkAction()),
});

export default React.memo(connect(undefined, mapDispatchToProps)(StartButton));
