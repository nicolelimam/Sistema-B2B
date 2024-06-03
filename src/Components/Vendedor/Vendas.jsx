import React, { useState, useEffect } from 'react';
import './Vendas.css';
import ImportarPedidos from './ImportarPedidos';
import InfoPedido from './InfoPedido';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

function Vendas() {
  const [showExportTooltip, setShowExportTooltip] = useState(false);
  const [showImportTooltip, setShowImportTooltip] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [activeTab, setActiveTab] = useState('pendentes');
  const [selectedPedido, setSelectedPedido] = useState(null);

  const pedidos = [
    { id: 1, status: 'pendente', cliente: 'Cliente 1', produtos: [{ nome: 'Produto 1', quantidade: 2 }, { nome: 'Produto 4', quantidade: 1 }], data: '00/00/0000 00:00' },
    { id: 2, status: 'em-andamento', cliente: 'Cliente 2', produtos: [{ nome: 'Produto 3', quantidade: 2 }, { nome: 'Produto 8', quantidade: 4 }], data: '00/00/0000 00:00' },
    { id: 3, status: 'finalizado', cliente: 'Cliente 3', produtos: [{ nome: 'Produto 1', quantidade: 5 }, { nome: 'Produto 5', quantidade: 2 }], data: '00/00/0000 00:00' },
    { id: 4, status: 'finalizado', cliente: 'Cliente 5', produtos: [{ nome: 'Produto 2', quantidade: 2 }], data: '00/00/0000 00:00' },
    { id: 5, status: 'pendente', cliente: 'Cliente 4', produtos: [{ nome: 'Produto 1', quantidade: 2 }, { nome: 'Produto 4', quantidade: 1 }], data: '00/00/0000 00:00' }
  ];

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredPedidos = pedidos.filter(pedido => {
    if (activeTab === 'pendentes') return pedido.status === 'pendente';
    if (activeTab === 'em-andamento') return pedido.status === 'em-andamento';
    if (activeTab === 'finalizados') return pedido.status === 'finalizado';
    return true;
  });

  const handleOpenImportModal = () => {
    setShowImportModal(true);
  };

  const handleCloseImportModal = () => {
    setShowImportModal(false);
  };

  const handlePedidoClick = (pedido) => {
    setSelectedPedido(pedido);
  };

  const handleClosePedidoModal = () => {
    setSelectedPedido(null);
  };

  return (
    <div className='container-vendas'>
      <div className="top-v">
        <h1>Vendas</h1>
      </div>
      <div className="vertical-nav-v">
        <ul className="nav-vertical">
          <li className="nav-vertical-item">
            <button
              className={`pedidos-pendentes nav-v-item ${activeTab === 'pendentes' ? 'active' : ''}`}
              onClick={() => handleTabClick('pendentes')}
            >
              Pedidos pendentes
            </button>
          </li>
          <li className="nav-vertical-item">
            <button
              className={`pedidos-em-andamento nav-v-item ${activeTab === 'em-andamento' ? 'active' : ''}`}
              onClick={() => handleTabClick('em-andamento')}
            >
              Pedidos em andamento
            </button>
          </li>
          <li className="nav-vertical-item">
            <button
              className={`pedidos-finalizados nav-v-item ${activeTab === 'finalizados' ? 'active' : ''}`}
              onClick={() => handleTabClick('finalizados')}
            >
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
          <div className="btns-panel-content">
            <button className="btn-exportar btn-v"
              onMouseEnter={() => setShowExportTooltip(true)}
              onMouseLeave={() => setShowExportTooltip(false)}>
              <FontAwesomeIcon icon={faDownload} />
              <span className={`tooltip-exportar ${showExportTooltip ? 'visible' : ''}`}>Exportar lista de pedidos</span>
            </button>
            <button className="btn-importar btn-v"
              onMouseEnter={() => setShowImportTooltip(true)}
              onMouseLeave={() => setShowImportTooltip(false)}
              onClick={handleOpenImportModal}>
              <FontAwesomeIcon icon={faUpload} />
              <span className={`tooltip-importar ${showImportTooltip ? 'visible' : ''}`}>Importar lista de pedidos</span>
            </button>
          </div>
        </div>
        <div className="pedidos-container">
          {filteredPedidos.length === 0 ? (
            <div className="no-pedidos-message">Ops! Ainda não há nenhum pedido por aqui...</div>
          ) : (
            filteredPedidos.map(pedido => (
              <div key={pedido.id} className={`pedido-card pedido-${pedido.status}`} onClick={() => handlePedidoClick(pedido)}>
                <div className="info-pedido">
                  <h4 className="nome-pedido">Pedido {pedido.id}</h4>
                  <h5 className="nome-cliente">{pedido.cliente}</h5>
                  <span className="info-produtos">
                    {pedido.produtos.map((produto, index) => (
                      <span key={index}>{produto.nome} ({produto.quantidade} unidades)<br /></span>
                    ))}
                  </span>
                  <span className="data-pedido">
                    Data do pedido: {pedido.data}
                  </span>
                </div>
                <div className="btn-group">
                  {pedido.status === 'pendente' && (
                    <>
                      <button className="btn-confirmar-envio btn-v2">
                        Confirmar envio
                      </button>
                      <button className="btn-cancelar-pedido btn-v2">
                        Cancelar
                      </button>
                    </>
                  )}
                  {pedido.status === 'em-andamento' && (
                    <span className="status-pedido-ea">
                      Em rota de entrega
                    </span>
                  )}
                  {pedido.status === 'finalizado' && (
                    <span className={`status-pedido-f-${pedido.status === 'finalizado' ? 'finalizado' : ''}`}>
                      Pedido entregue
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        {showImportModal && (
          <ImportarPedidos onClose={handleCloseImportModal} />
        )}
        {selectedPedido && (
          <InfoPedido pedido={selectedPedido} onClose={handleClosePedidoModal} />
        )}
      </div>
    </div>
  );
}

export default Vendas;
