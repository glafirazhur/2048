import React from 'react';
import './styles.css';

const Field = () =>
  <div className="game__container">

    <div className="grid grid-layout">
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
      <div className="grid-cell"></div>
    </div>

    <div className="grid numbers">
      <div className="number number-2 pos--1-1">2</div>
      <div className="number number-2 pos--1-2">2</div>
      {/*<div className="number number-4 pos--1-3">4</div>*/}
      {/*<div className="number number-4 pos--1-4">4</div>*/}
      <div className="number number-8 pos--2-1">8</div>
      {/*<div className="number number-8 pos--2-2">8</div>*/}
      <div className="number number-16 pos--2-3">16</div>
      <div className="number number-16 pos--2-4">16</div>
      {/*<div className="number number-32 pos--3-1">32</div>*/}
      <div className="number number-32 pos--3-2">32</div>
      <div className="number number-64 pos--3-3">64</div>
      {/*<div className="number number-64 pos--3-4">64</div>*/}
      {/*<div className="number number-128 pos--4-1">128</div>*/}
      {/*<div className="number number-128 pos--4-2">128</div>*/}


      {/*<div className="number number-256 pos--4-3">256</div>*/}
      {/*<div className="number number-256 pos--4-4">256</div>*/}

      {/*<div className="number number-512 pos--4-3">512</div>*/}
      {/*<div className="number number-512 pos--4-4">512</div>*/}

      <div className="number number-1024 pos--4-3">1024</div>
      {/*<div className="number number-1024 pos--4-4">1024</div>*/}

      {/*<div className="number number-2048 pos--4-3">2048</div>*/}
      {/*<div className="number number-2048 pos--4-4">2048</div>*/}
    </div>

  </div>;

export default Field;
