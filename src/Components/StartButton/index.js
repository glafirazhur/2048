import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const StartButton = ({ clearScore }) => <button type="button" className="start-button" onClick={clearScore}>Start again</button>;

StartButton.propTypes = {
  clearScore: PropTypes.func.isRequired,
};

export default StartButton;
