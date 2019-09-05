import React, { useEffect } from 'react';
import { Swipeable } from 'react-swipeable';

import './styles.css';

import Number from '../Number';

const NumberField = () => {
  const moveLeft = () => {
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
      className="grid numbers"
    >
      {/* map numbers from numbers array from state */}

      <Number val={2} xPos={1} yPos={1} />
      <div className="number number--2 pos--1-2">2</div>
      {/* <div className='number number--4 pos--1-3'>4</div> */}
      {/* <div className='number number--4 pos--1-4'>4</div> */}
      <div className="number number--8 pos--2-1">8</div>
      {/* <div className='number number--8 pos--2-2'>8</div> */}
      <div className="number number--16 pos--2-3">16</div>
      <div className="number number--16 pos--2-4">16</div>
      {/* <div className='number number--32 pos--3-1'>32</div> */}
      <div className="number number--32 pos--3-2">32</div>
      <div className="number number--64 pos--3-3">64</div>
      {/* <div className="number number--64 pos--3-4">64</div> */}
      {/* <div className="number number--128 pos--4-1">128</div> */}
      {/* <div className="number number--128 pos--4-2">128</div> */}
      {/* <div className="number number--256 pos--4-3">256</div> */}
      {/* <div className="number number--256 pos--4-4">256</div> */}
      {/* <div className="number number--512 pos--4-3">512</div> */}
      {/* <div className="number number--512 pos--4-4">512</div> */}
      <div className="number number--1024 pos--4-3">1024</div>
      {/* <div className="number number--1024 pos--4-4">1024</div> */}
      {/* <div className="number number--2048 pos--4-3">2048</div> */}
      {/* <div className="number number--2048 pos--4-4">2048</div> */}
    </Swipeable>
  );
};

export default NumberField;
