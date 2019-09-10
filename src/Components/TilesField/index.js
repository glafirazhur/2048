import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';

// Components
import Tile from '../Tile';

const TilesField = ({ tiles }) => (
  <div className="grid numbers">
    { tiles.map((tile) => <Tile key={`${tile.rowPos}-${tile.colPos}`} rowPos={tile.rowPos} colPos={tile.colPos} tileVal={tile.tileVal} />) }
  </div>
);

TilesField.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
};

TilesField.defaultProps = {
  tiles: [],
};

const mapStateToProps = (state) => ({ tiles: state.tiles });

export default connect(mapStateToProps)(TilesField);
