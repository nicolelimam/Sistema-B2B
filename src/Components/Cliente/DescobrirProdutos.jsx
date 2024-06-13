import React, { useState } from 'react';
import './DescobrirProdutos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import icon_produto from '../Assets/icon-produto-sb.png';
import InfoProdutoCliente from './InfoProdutoCliente';

function DescobrirProdutos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const produtos = [
    { nome: 'Produto 1', vendedor: 'Vendedor 1', preco: 1000, imagem: icon_produto }, 
    { nome: 'Produto 2', vendedor: 'Vendedor 2', preco: 2000, imagem: icon_produto },
    { nome: 'Produto 3', vendedor: 'Vendedor 3', preco: 3000, imagem: icon_produto },
  ];

  const handleCardClick = (produto) => {
    setSelectedProduct(produto);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const renderProdutos = () => {
    if (produtos.length === 0) {
      return <p className="no-products-message">Ops! Nenhum produto para exibir ainda :(</p>;
    }
    
    return produtos.map((produto, index) => (
      <div key={index} className="produto-card-dp" onClick={() => handleCardClick(produto)}>
        <div className="left-produto-card-dp">
          <div className="imagem-produto">
            <img src={produto.imagem || icon_produto} alt={`Imagem do ${produto.nome}`} className='icon-img-produto' />
          </div>
        </div>
        <div className="right-produto-card-dp">
          <p className="nome-produto">{produto.nome}</p>
          <p>Por <span className='nome-vendedor'>{produto.vendedor}</span></p>
          <p className="preco-produto">
            R$ <span className="preco">{produto.preco}</span>
          </p>
          <span className="juros">Sem juros</span>
        </div>
      </div>
    ));
  };

  return (
    <div className='descobrir-produtos-container'>
      {selectedProduct ? (
        <InfoProdutoCliente produto={selectedProduct} onBackClick={handleBackClick} />
      ) : (
        <>
          <div className="top">
            <h1>Descobrir</h1>
            <div className="search-box">
              <input
                type="text"
                name="searchBox"
                id="searchBox"
                className="campotxt-sb"
                placeholder="Faça sua busca aqui"
              />
              <button id="btnSearch" className="btn-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="main-content">
            <div className="left-main-content-dp">
              <h3>
                <FontAwesomeIcon icon={faFilter} />
                Ordenar por
              </h3>
              <div className="filtros-panel">
                <p>Filtrar com base em</p>
                <div className="checklist-fp">
                  <div className="checkbox-fp">
                    <input type="checkbox" name="" id="maisRelevantes" />
                    <label htmlFor="maisRelevantes">Mais relevantes</label>
                  </div>
                  <div className="checkbox-fp">
                    <input type="checkbox" name="" id="maisRecentes" />
                    <label htmlFor="maisRecentes">Mais recentes</label>
                  </div>
                  <div className="checkbox-fp">
                    <input type="checkbox" name="" id="menorPreco" />
                    <label htmlFor="menorPreco">Menor preço</label>
                  </div>
                  <div className="checkbox-fp">
                    <input type="checkbox" name="" id="maiorPreco" />
                    <label htmlFor="maiorPreco">Maior preço</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-main-content-dp">
              <div className="panel-produtos-dp">
                {renderProdutos()}
              </div>
            </div>
          </div>
        </>
      )}
      <br />
    </div>
  );
}

export default DescobrirProdutos;
