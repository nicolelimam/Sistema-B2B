import React from 'react';
import './PopupTornarIndisponivel.css';

function PopupTornarIndisponivel({ onClose }) {
  return (
    <div className="tornar-indisponivel-container">
      <div className="overlay"></div>
      <div className="panel-tornar-indisponivel">
        <h2>Confirmar indisponibilidade</h2>
        <p>Tem certeza de que deseja tornar este produto indisponível?</p>
        <div className="btn-group-pti">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-confirmar">Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default PopupTornarIndisponivel;
