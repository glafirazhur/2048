import React, { useEffect } from 'react';
import { Swipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { updateScoreAction } from '../../Redux/actions/scoreActions';

// CSS
import '../../css/variables.css';
import '../../css/common.css';
import './App.css';

// components
import Field from '../Field';
import NumberField from '../NumberField';
import StartButton from '../StartButton';
import CurrentScore from '../CurrentScore';
import BestScore from '../BestScore';

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
      <StartButton />
      <div className="score-wrap">
        <CurrentScore scoreLabel="Your score" />
        <BestScore scoreLabel="Best score" />
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

const mapStateToProps = (state) => ({ score: state.store });

const mapDispatchToProps = (dispatch) => ({
  updateScore:
    (currentScore) => dispatch(updateScoreAction(currentScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
