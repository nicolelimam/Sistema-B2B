import React from 'react';
import './PopupConfirmaEnvio.css';

function PopupConfirmaEnvio({ onClose }) {
  return (
    <div className='confirmar-envio-container'>
      <div className="overlay" onClick={onClose}></div>
      <div className="panel-confirmar-envio">
        <h2>Confirmar envio do pedido</h2>
        <p>
          Somente confirme o envio quando tiver certeza que o pedido já está a caminho
          do destinatário.
        </p>
        <div className="btn-group-pcen">
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn-confirmar-envio-popup">Confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default PopupConfirmaEnvio;
