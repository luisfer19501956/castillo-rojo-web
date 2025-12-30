import React from 'react';
import './ticker.css';

const TickerLine = () => {
  return (
    <div className="ticker-container">
      <div className="ticker-icon">
        <img
          src="/icons/redcastle.png"
          alt="Castillo Rojo"
          style={{ width: '24px', height: '24px' }}
        />
      </div>
      <div className="ticker-text">
        Impulsamos transformaciones responsables, guiando a nuestros clientes con excelencia, integridad y compromiso ambiental.
      </div>
    </div>
  );
};

export default TickerLine;