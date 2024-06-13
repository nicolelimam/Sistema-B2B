import React from 'react'
import './NotificacoesCliente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function NotificacoesCliente() {
  return (
    <div className='container-notificacoes'>
        <div className="top-n">
            <h1>Notificações</h1>
            <button className="btn-limpar-notificacoes">
                <FontAwesomeIcon icon={faTrash} />

                
            </button>
        </div>
        <br />
        <div className="bottom-n">
            <div className="panel-notificacoes">
                <div className="notificacao">
                    <div className="left-n">
                        <h4 className="titulo-notificacao">Notificação</h4>
                        <p className="texto-notificacao">Texto da notificação</p>
                    </div>
                    <div className="right-n">
                        <span className='data-notificacao'>00:00:0000 <br />
                         00:00</span>
                    </div>
                </div>

                <div className="notificacao">
                    <div className="left-n">
                        <h4 className="titulo-notificacao">Notificação</h4>
                        <p className="texto-notificacao">Texto da notificação</p>
                    </div>
                    <div className="right-n">
                        <span className='data-notificacao'>00:00:0000 <br />
                        00:00</span>
                    </div>
                </div>

                <div className="notificacao">
                    <div className="left-n">
                        <h4 className="titulo-notificacao">Notificação</h4>
                        <p className="texto-notificacao">Texto da notificação</p>
                    </div>
                    <div className="right-n">
                        <span className='data-notificacao'>00:00:0000 <br />
                        00:00</span>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default NotificacoesCliente
