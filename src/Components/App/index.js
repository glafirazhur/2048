import React, { useEffect } from 'react';
import { Swipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

// CSS
import './App.css';

// components
import Field from '../Field';
import NumberField from '../NumberField';
import StartButtonContainer from '../../Containers/StartButtonContainer';
import CurrentScoreContainer from '../../Containers/CurrentScoreContainer';
import BestScoreContainer from '../../Containers/BestScoreContainer';

const App = ({ updateScore }) => {
  const moveLeft = () => {
    updateScore(10);
    console.log('LEFT');
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
      <StartButtonContainer />
      <div className="score-wrap">
        <CurrentScoreContainer />
        <BestScoreContainer />
      </div>
      <div className="game__container">
        <Field />
        <NumberField />
      </div>
    </Swipeable>
  );
};

App.propTypes = {
  updateScore: PropTypes.func.isRequired,
};

export default App;
