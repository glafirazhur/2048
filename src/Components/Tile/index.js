import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

const Tile = ({ tileVal, rowPos, colPos }) => <div className={`number number--${tileVal} pos--${rowPos}-${colPos}`}>{tileVal}</div>;

Tile.propTypes = {
  tileVal: PropTypes.number.isRequired,
  rowPos: PropTypes.number.isRequired,
  colPos: PropTypes.number.isRequired,
};

export default Tile;
