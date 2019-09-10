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
import { initGameThunkAction, updateTilesPositionAThunk } from '../../Redux/actions/gameActions';
import FinishGame from '../FinishGame';

const App = ({ initGame, updateTilesPosition, gameStatus }) => {
  const moveLeft = () => {
    updateTilesPosition('left');
  };

  const moveRight = () => {
    updateTilesPosition('right');
  };

  const moveUp = () => {
    updateTilesPosition('up');
  };

  const moveDown = () => {
    updateTilesPosition('down');
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
        { !gameStatus ? <FinishGame /> : null }
      </div>
    </Swipeable>
  );
};

App.propTypes = {
  gameStatus: PropTypes.bool.isRequired,
  initGame: PropTypes.func.isRequired,
  updateTilesPosition: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ tiles: state.tiles, gameStatus: state.gameStatus });

const mapDispatchToProps = (dispatch) => ({
  initGame: () => dispatch(initGameThunkAction()),
  updateTilesPosition: (direction) => dispatch(updateTilesPositionAThunk(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
