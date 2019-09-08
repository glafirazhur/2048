import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const Tile = ({ tileVal, xPos, yPos }) => <div className={`number number--${tileVal} pos--${xPos}-${yPos}`}>{tileVal}</div>;

Tile.propTypes = {
  tileVal: PropTypes.number.isRequired,
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired,
};

export default Tile;
