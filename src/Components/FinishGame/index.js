import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// redux
import { connect } from 'react-redux';
import StartButton from '../StartButton';

const FinishGame = () => {
  return (
    <div className="game-status">
      END GAME
      <StartButton>Restart</StartButton>
    </div>
  );
};

FinishGame.propTypes = {
  gameStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ gameStatus: state.gameStatus });

export default React.memo(connect(mapStateToProps)(FinishGame));
