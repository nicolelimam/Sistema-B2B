import React from 'react';
import './PopupConfirmaExclusao.css';

function PopupConfirmaExclusao({ onClose }) {
  return (
    <div className='modal-container'>
        <div className="overlay" onClick={onClose}></div>
        <div className="modal-confirmar-exclusao">
            <div className="top">
            <h2>Você tem certeza?</h2>
            </div>
            <div className="main-content-pce">
                <p>Atenção! Se você apagar esse item agora, ele não poderá 
                    ser recuperado. Tem certeza que deseja continuar?</p>
                    <div className="btn-group-pce">
                        <button id="btnCancelar" onClick={onClose}> 
                            Cancelar
                        </button>
                        <button id="btnExcluir">
                            Sim, excluir!
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default PopupConfirmaExclusao;
