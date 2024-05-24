import React, { useState, useEffect } from 'react';
import './Vendas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

function Vendas() {
  const [showExportTooltip, setShowExportTooltip] = useState(false);
  const [showImportTooltip, setShowImportTooltip] = useState(false);

  useEffect(() => {
    let exportTimer;
    if (showExportTooltip) {
      exportTimer = setTimeout(() => {
        setShowExportTooltip(false);
      }, 5000);
    }
    return () => clearTimeout(exportTimer);
  }, [showExportTooltip]);

  useEffect(() => {
    let importTimer;
    if (showImportTooltip) {
      importTimer = setTimeout(() => {
        setShowImportTooltip(false);
      }, 5000);
    }
    return () => clearTimeout(importTimer);
  }, [showImportTooltip]);

  return (
    <div className='container-vendas'>
      <div className="top-v">
        <h1>Vendas</h1>
      </div>
      <div className="vertical-nav">
        <ul className="nav-vertical">
          <li className="nav-vertical-item">
            <button className="pedidos-pendentes nav-v-item active">
              Pedidos pendentes
            </button>
          </li>
          <li className="nav-vertical-item">
            <button className="pedidos-em-andamento nav-v-item">
              Pedidos em andamento
            </button>
          </li>
          <li className="nav-vertical-item">
            <button className="pedidos-finalizados nav-v-item">
              Pedidos finalizados
            </button>
          </li>
        </ul>
      </div>
      <div className="panel-content">
        <div className="top-panel-content">
          <div className="search-box">
            <input type="text" name="searchBox" id="searchBox" className='campotxt-sb' placeholder='Faça sua busca aqui' />
            <button id='btnSearch' className='btn-search'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <span className={`tooltip-exportar ${showExportTooltip ? 'visible' : ''}`}>Exportar lista de pedidos</span>
          <button className="btn-exportar btn-v"
            onMouseEnter={() => setShowExportTooltip(true)}
            onMouseLeave={() => setShowExportTooltip(false)}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <span className={`tooltip-importar ${showImportTooltip ? 'visible' : ''}`}>Importar lista de pedidos</span>
          <button className="btn-importar btn-v"
            onMouseEnter={() => setShowImportTooltip(true)}
            onMouseLeave={() => setShowImportTooltip(false)}>
            <FontAwesomeIcon icon={faUpload} />
          </button>
        </div>
        <div className="pedidos-container">
          <div className="pedido-pendente">
            <div className="info-pedido">
              <h4 className="nome-pedido">Pedido 1</h4>
              <h5 className="nome-cliente">Cliente 1</h5>
              <span className="info-produtos">
                Produto 1 (2 unidades) <br />
                Produto 4 (1 unidade)
              </span>
              <span className="data-pedido">
                Data do pedido: 00/00/0000 00:00
              </span>
            </div>
            <div className="btn-group">
              <button className="btn-confirmar-envio btn-v2">
                Confirmar envio
              </button>
              <button className="btn-cancelar-pedido btn-v2">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendas;
