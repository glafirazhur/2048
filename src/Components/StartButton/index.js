import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import { clearScoreAction } from '../../Redux/actions/scoreActions';

const StartButton = ({ clearScore }) => <button type="button" className="start-button" onClick={clearScore}>Start again</button>;

StartButton.propTypes = {
  clearScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ score: state.score });
const mapDispatchToProps = (dispatch) => ({
  clearScore: () => dispatch(clearScoreAction()),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(StartButton));
