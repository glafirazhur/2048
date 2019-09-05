import React from 'react';

// CSS
import '../../css/variables.css';
import '../../css/common.css';
import './App.css';

// components
import Field from '../Field';
import NumberField from '../NumberField';
import StartButton from '../StartButton';
import Score from '../Score';

const App = () => (
  <div className="wrap">
    <h1 className="game-header">2048</h1>
    <p className="game-description">Use Up, Down, Left, Right keys of swipe to play</p>
    <StartButton />
    <div className="score-wrap">
      <Score scoreLabel="Your score" />
      <Score scoreLabel="Best score" />
    </div>
    <div className="game__container">
      <Field />
      <NumberField />
    </div>
  </div>
);

export default App;
