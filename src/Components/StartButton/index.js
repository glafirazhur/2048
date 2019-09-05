import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const StartButton = ({ btnText }) => <button type="button" className="start-button">{btnText}</button>;

StartButton.propTypes = {
  btnText: PropTypes.string,
};

StartButton.defaultProps = {
  btnText: 'Start',
};

export default StartButton;
