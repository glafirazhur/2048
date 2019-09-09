import React from 'react';

// CSS
import './styles.css';

import StartButton from '../StartButton';

const FinishGame = () => (
  <div className="game-status">
    END GAME
    <StartButton>Restart</StartButton>
  </div>
);

export default React.memo(FinishGame);
