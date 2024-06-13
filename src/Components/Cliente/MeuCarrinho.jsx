import React, { useState } from 'react';
import './MeuCarrinho.css';
import imagem_produto from '../Assets/icon-produto-sb.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import FormPedido from './FormPedido';

function MeuCarrinho() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', vendedor: 'Vendedor 1', preco: 1000, unidades: 30, quantidade: 1, isChecked: false },
    { id: 2, nome: 'Produto 2', vendedor: 'Vendedor 3', preco: 300, unidades: 12, quantidade: 1, isChecked: false }
  ]);

  const [isFormPedidoVisible, setIsFormPedidoVisible] = useState(false);

  const handleCheckboxChange = (id) => {
    setProdutos(prevProdutos =>
      prevProdutos.map(produto =>
        produto.id === id ? { ...produto, isChecked: !produto.isChecked } : produto
      )
    );
  };

  const handleRemoveProduto = (id) => {
    setProdutos(prevProdutos => prevProdutos.filter(produto => produto.id !== id));
  };

  const handleQuantidadeChange = (id, change) => {
    setProdutos(prevProdutos =>
      prevProdutos.map(produto =>
        produto.id === id
          ? {
              ...produto,
              quantidade: Math.max(1, Math.min(produto.unidades, produto.quantidade + change))
            }
          : produto
      )
    );
  };

  const handleQuantidadeInputChange = (id, value) => {
    setProdutos(prevProdutos =>
      prevProdutos.map(produto =>
        produto.id === id
          ? {
              ...produto,
              quantidade: value === '' ? 1 : Math.max(1, Math.min(produto.unidades, parseInt(value)))
            }
          : produto
      )
    );
  };

  const handleComprarAgoraClick = () => {
    setIsFormPedidoVisible(true);
  };

  const handleCancelarPedidoClick = () => {
    setIsFormPedidoVisible(false);
  };

  return (
    <div className='meu-carrinho-container'>
      {isFormPedidoVisible ? (
        <FormPedido onCancelarPedidoClick={handleCancelarPedidoClick} />
      ) : (
        <>
          <div className="top-mc">
            <h1>Meu carrinho</h1>
            <button id="btnComprarAgora" onClick={handleComprarAgoraClick}>
              Comprar agora
            </button>
          </div>
          <div className="panel-produtos-carrinho">
            {produtos.length === 0 ? (
              <p className="mensagem-vazio">
                Você ainda não tem nenhum produto no seu carrinho.
              </p>
            ) : (
              produtos.map(produto => (
                <div className="produto-carrinho-card" key={produto.id}>
                  <div className="left-ppc">
                    <div className="left-l-ppc">
                      <label className="checkbox-mc">
                        <input 
                          type="checkbox" 
                          className="selecionarProdutoCarrinho" 
                          checked={produto.isChecked} 
                          onChange={() => handleCheckboxChange(produto.id)}
                        />
                        {produto.isChecked && <FontAwesomeIcon icon={faCheck} className="checkbox-icon" />}
                      </label>
                      <div className="imagem-produto-carrinho">
                        <img src={imagem_produto} alt="" className="img-prod-carrinho" />
                      </div>
                    </div>
                    <div className="right-l-ppc">
                      <p className="nome-produto-carrinho">{produto.nome}</p>
                      <p>Por <span className="nome-vendedor-carrinho">{produto.vendedor}</span></p>
                      <h2>R$ <span className="preco-produto-carrinho">{produto.preco}</span></h2>
                      <p className="juros-carrinho">Sem juros</p>
                    </div>
                  </div>
                  <div className="right-ppc">
                    <div className="left-r-ppc">
                      <div className="btn-numerico-ppc">
                        <button className="btn-sub" onClick={() => handleQuantidadeChange(produto.id, -1)}>-</button>
                        <input
                          type="text"
                          className="campo-btn-numerico"
                          value={produto.quantidade}
                          onChange={(e) => handleQuantidadeInputChange(produto.id, e.target.value)}
                          onBlur={(e) => handleQuantidadeInputChange(produto.id, e.target.value)}
                        />
                        <button className="btn-soma" onClick={() => handleQuantidadeChange(produto.id, 1)}>+</button>
                      </div>
                      <span>Unidades disponíveis: <span className="unidades-disponiveis-produto">{produto.unidades}</span></span>
                    </div>
                    <div className="right-r-ppc">
                      <span>Opções:</span>
                      <button id="btnRemoverProduto" onClick={() => handleRemoveProduto(produto.id)}>Remover do carrinho</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MeuCarrinho;
