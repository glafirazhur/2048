import React, { useEffect } from 'react';
import { Swipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// components
import { connect } from 'react-redux';
import Field from '../Field';
import TilesField from '../TilesField';
import StartButton from '../StartButton';
import Score from '../Score';

// Actions
import { initGameThunkAction } from '../../Redux/actions/gameActions';
import { updateTilePositionAction } from '../../Redux/actions/tilesActions';

// const App = ({ /*tiles, updateTilePosition*/ }) => {
const App = ({ tiles, initGame, updatePosition }) => {
  const moveLeft = () => {
    tiles.map(updatePosition('left'));
  };

  const moveRight = () => {
    console.log('RIGHT');
  };

  const moveUp = () => {
    console.log('UP');
  };

  const moveDown = () => {
    console.log('DOWN');
  };

  useEffect(() => {
    initGame();

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          moveLeft();
          break;
        case 38:
          moveUp();
          break;
        case 39:
          moveRight();
          break;
        case 40:
          moveDown();
          break;
        default:
      }
    });
  }, []);

  return (
    <Swipeable
      onSwipedLeft={moveLeft}
      onSwipedRight={moveRight}
      onSwipedUp={moveUp}
      onSwipedDown={moveDown}
      className="wrap"
    >
      <h1 className="game-header">2048</h1>
      <p className="game-description">Use Up, Down, Left, Right keys or swipe to play</p>
      <StartButton />
      <div className="score-wrap">
        <Score scoreType="current" />
        <Score scoreType="best" />
      </div>
      <div className="game__container">
        <Field />
        <TilesField />
      </div>
    </Swipeable>
  );
};

App.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  initGame: PropTypes.func.isRequired,
  updatePosition: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ tiles: state.tiles });

const mapDispatchToProps = (dispatch) => ({
  initGame:
    () => dispatch(initGameThunkAction()),
  updatePosition: (direction) => dispatch(updateTilePositionAction(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
