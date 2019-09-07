import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const Number = ({ val, xPos, yPos }) => <div className={`number number--${val} pos--${xPos}-${yPos}`}>{val}</div>;

Number.propTypes = {
  val: PropTypes.number.isRequired,
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired,
};

export default Number;
