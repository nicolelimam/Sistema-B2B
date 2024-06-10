import React from "react";
import "./PopupCancelarPedido.css";

function PopupCancelarPedido({ onClose }) {
  return (
    <div className="cancelar-pedido-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="panel-cancelar-pedido">
        <div className="top">
          <h2>Você tem certeza?</h2>
        </div>
        <div className="main-content-pcp">
          <p>
            Atenção! Cancelar um pedido é uma ação que não pode ser desfeita. Tem certeza que deseja continuar?
          </p>
          <div className="btn-group-pcp">
            <button id="btnCancelarPopup" onClick={onClose}>
              Cancelar
            </button>
            <button id="btnCancelarPedidoPopup">Sim, cancelar!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupCancelarPedido;
