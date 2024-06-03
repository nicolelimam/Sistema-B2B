import React, { useState, useEffect } from "react";
import "./InventarioVendedor.css";
import icon_produto from '../Assets/icon-produto.jpg';
import ImportarProdutos from "./ImportarProdutos";
import CadastroProdutos from "./CadastroProdutos"; 
import InfoProduto from "./InfoProduto"; // Importando InfoProduto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faDownload, faUpload, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

function InventarioVendedor() {
  const [activeTab, setActiveTab] = useState('todos');
  const [showExportTooltip2, setShowExportTooltip2] = useState(false);
  const [showImportTooltip2, setShowImportTooltip2] = useState(false);
  const [isImportarProdutosModalOpen2, setIsImportarProdutosModalOpen2] = useState(false);
  const [isCadastroProdutosOpen, setIsCadastroProdutosOpen] = useState(false); 
  const [isInfoProdutoOpen, setIsInfoProdutoOpen] = useState(false); // Novo estado

  const produtos = [
    { id: 1, status: 'disponivel', nome: 'Produto 1', preco: 600.00, quantidade: 10 },
    { id: 2, status: 'esgotado', nome: 'Produto 2', preco: 500.00, quantidade: 0 },
    { id: 3, status: 'disponivel', nome: 'Produto 3', preco: 700.00, quantidade: 5 },
  ];

  const openImportarProdutosModal2 = () => {
    setIsImportarProdutosModalOpen2(true);
  };

  const closeImportarProdutosModal2 = () => {
    setIsImportarProdutosModalOpen2(false);
  };

  const openCadastroProdutosPopup = () => {
    setIsCadastroProdutosOpen(true);
  };

  const closeCadastroProdutosPopup = () => {
    setIsCadastroProdutosOpen(false);
  };

  const openInfoProdutoPopup = () => {
    setIsInfoProdutoOpen(true); 
  };

  const closeInfoProdutoPopup = () => {
    setIsInfoProdutoOpen(false); 
  };

  useEffect(() => {
    let exportTimer2;
    if (showExportTooltip2) {
      exportTimer2 = setTimeout(() => {
        setShowExportTooltip2(false);
      }, 5000);
    }
    return () => clearTimeout(exportTimer2);
  }, [showExportTooltip2]);

  useEffect(() => {
    let importTimer2;
    if (showImportTooltip2) {
      importTimer2 = setTimeout(() => {
        setShowImportTooltip2(false);
      }, 5000);
    }
    return () => clearTimeout(importTimer2);
  }, [showImportTooltip2]);

  const handleTabClick2 = (tab) => {
    setActiveTab(tab);
  };

  const filteredProdutos = produtos.filter(produto => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'disponiveis') return produto.status === 'disponivel';
    if (activeTab === 'esgotados') return produto.status === 'esgotado';
    return true;
  });

  return (
    <div className="container-inventario">
      <div className="top-i">
        <h1>Inventário</h1>
      </div>
      <div className="vertical-nav-i">
        <ul className="nav-vertical">
          <li className="nav-vertical-item">
            <button
              className={`td-produtos nav-i-item ${activeTab === 'todos' ? 'active' : ''}`}
              onClick={() => handleTabClick2('todos')}
            >
              Todos os produtos
            </button>
          </li>
          <li className="nav-vertical-item">
            <button
              className={`produtos-disponiveis nav-i-item ${activeTab === 'disponiveis' ? 'active' : ''}`}
              onClick={() => handleTabClick2('disponiveis')}
            >
              Produtos disponíveis
            </button>
          </li>
          <li className="nav-vertical-item">
            <button
              className={`produtos-esgotados nav-i-item ${activeTab === 'esgotados' ? 'active' : ''}`}
              onClick={() => handleTabClick2('esgotados')}
            >
              Produtos esgotados
            </button>
          </li>
        </ul>
      </div>
      <div className="panel-content">
        <div className="top-panel-content">
          <div className="top-left">
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
            <div className="btns-panel-content">
              <span className={`tooltip-exp2 ${showExportTooltip2 ? 'visible' : ''}`}>Exportar lista de produtos</span>
              <button className="btn-exportar btn-i"
                onMouseEnter={() => setShowExportTooltip2(true)}
                onMouseLeave={() => setShowExportTooltip2(false)}>
                <FontAwesomeIcon icon={faDownload} />
              </button>
              <span className={`tooltip-imp2 ${showImportTooltip2 ? 'visible' : ''}`}>Importar lista de produtos</span>
              <button 
                className="btn-importar btn-i"
                onMouseEnter={() => setShowImportTooltip2(true)}
                onMouseLeave={() => setShowImportTooltip2(false)}
                onClick={openImportarProdutosModal2}
              >
                <FontAwesomeIcon icon={faUpload} />
              </button>
            </div>
          </div>
          <div className="top-right">
            <button className="btn-cadastrar-produto" onClick={openCadastroProdutosPopup}>
              Cadastrar novo produto
            </button>
            <div className="area-filtro">
              <label htmlFor="filtroProdutos" className="btn-filtro-lb">
                <FontAwesomeIcon icon={faArrowDownWideShort} />
                <span>Filtrar por</span>
              </label>
              <select name="filtroProdutos" id="filtroProdutos">
                <option value="">Todos os produtos</option>
                <option value="">Mais vendidos</option>
                <option value="">Mais recentes</option>
                <option value="">Maior preço</option>
                <option value="">Menor preço</option>
                <option value="">Menos vendidos</option>
                <option value="">Mais antigos</option>
              </select>
            </div>
          </div>
        </div>
        <div className="produtos-container">
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map(produto => (
              <div key={produto.id} className={`produto-${produto.status} produto-card`} onClick={openInfoProdutoPopup}>
                <div className="info-produto">
                  <div className="top-info-produto">
                    <div className="img-produto">
                      <img src={icon_produto} alt="Imagem em miniatura do produto" />
                    </div>
                    <h5 className="nome-produto">{produto.nome}</h5>
                  </div>
                  <div className="bottom-info-produto">
                    <span className="preco-produto">R$ {produto.preco.toFixed(2)}</span>
                    <span className="status-juros">Sem juros</span>
                    <span className="quantidade-disponivel-prod">
                      Quantidade disponível:
                      <span className="quant-prod">{produto.quantidade}</span>
                    </span>
                  </div>
                </div>
                <div className="btn-group">
                  <button className="btn-editar btn-i2">
                    Editar
                  </button>
                  {produto.status === 'disponivel' ? (
                    <button className="btn-indisponivel btn-i2">
                      Tornar indisponível
                    </button>
                  ) : (
                    <button className="btn-disponivel btn-i2">
                      Tornar disponível
                    </button>
                  )}
                  <button className="btn-excluir btn-i2">
                    Excluir
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2>Ops! Ainda não há nenhum produto por aqui...</h2>
          )}
        </div>
      </div>
      <br />
      {isImportarProdutosModalOpen2 && <ImportarProdutos onClose={closeImportarProdutosModal2} />} 
      {isCadastroProdutosOpen && <CadastroProdutos onClose={closeCadastroProdutosPopup} />} 
      {isInfoProdutoOpen && <InfoProduto onClose={closeInfoProdutoPopup} />} {/* Condicional para exibir InfoProduto */}
    </div>
  );
}

export default InventarioVendedor;
