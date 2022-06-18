import React from 'react';
import '../css/Contador.css';

function Contador({ nroClics }) {
  return (
    <div className='contador'>
      { nroClics }
    </div>
  );
}

export default Contador;