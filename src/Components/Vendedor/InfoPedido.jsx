import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './InfoPedido.css';
import icon_produto_pedido from '../Assets/icon-produto.jpg';

function InfoPedido({ pedido, onClose }) {
  return (
    <div className='modal-container'>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-info-pedido">
        <div className="top">
          <button className='btn-fechar' onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className='icon-btn-fechar' />
          </button>
        </div>
        <div className="info-pedido-container">
          <h2 id="nome-pedido">Pedido {pedido.id}</h2>
          <div className="itens-pedido">
            <h3>Itens do pedido</h3>
            <ul id="lista-pedido">
              {pedido.produtos.map((produto, index) => (
                <li key={index} className="item-pedido">
                  <div className="left-item-pedido">
                    <div className="img-produto">
                      <img src={icon_produto_pedido} alt="Ícone do produto" />
                    </div>
                    <span className="nome-produto">{produto.nome}</span>
                  </div>
                  <div className="right-item-pedido">
                    <span className="quantidade-produto">{produto.quantidade}x</span>
                    <span>R$ <span className="preco-item-pedido">100</span></span> 
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-comprador">
            <h5>Comprador: <span className='nome-cliente'>{pedido.cliente}</span></h5>
            <p>Data da compra: <span className="data-pedido">{pedido.data}</span></p>
            <p>Meio de pagamento: <span className="meio-pagamento">Cartão de crédito</span></p>
            <p>Observações do cliente: <span className="mensagem-cliente">O cliente não inseriu nenhuma observação.</span></p> 
          </div>
          <h3>Informações de entrega</h3>
          <div className="info-entrega">
            <div className="left-info-entrega">
              <p>Endereço de envio: <br /> <span className="endereco-cliente">
                Rua 1, N1 <br />
                CEP 00000-000 <br />
                SP, Brasil
              </span></p> 
              <br />
              <p>Valor do frete: <br />
                <span className="valor-frete">Frete grátis</span>
              </p> 
            </div>
            <div className="right-info-entrega">
              <p>Valor total do pedido:</p>
              <h2>R$ <span className="valor-pedido">400</span></h2> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPedido;
