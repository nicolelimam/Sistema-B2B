import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./InfoPedidoCliente.css";
import icon_produto_pedido from "../Assets/icon-produto.jpg";

function InfoPedidoCliente({ pedido, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-info-pedido">
        <div className="top">
          <button className="btn-fechar" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="icon-btn-fechar" />
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
                    <span className="nome-vendedor">
                      (Por {produto.vendedor})
                    </span>{" "}
                    {/* Adiciona o nome do vendedor */}
                  </div>
                  <div className="right-item-pedido">
                    <span className="quantidade-produto">
                      {produto.quantidade}x
                    </span>
                    <span>
                      R$ <span className="preco-item-pedido">100</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <h3>Status do pedido</h3>
          <span className="status-pedido">Entregue</span>
          <p>O pedido já foi entregue ao endereço de destino.</p>
          <br />
          <h3>Informações de entrega</h3>
          <div className="info-entrega">
            <div className="left-info-entrega">
              <p>
                Endereço de envio: <br />{" "}
                <span className="endereco-cliente">
                  Rua 1, N1 <br />
                  CEP 00000-000 <br />
                  SP, Brasil
                </span>
              </p>
              <p>
                Valor do frete: <br />
                <span className="valor-frete">Frete grátis</span>
              </p>
            </div>
            <div className="right-info-entrega">
              <p>Valor total do pedido:</p>
              <h2>
                R$ <span className="valor-pedido">400</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPedidoCliente;
