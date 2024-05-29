import React, { useEffect, useState } from "react";
import './HomeDashboard.css'; 
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse, faBell, faTag, faCartFlatbed, faHandshake, faSquarePollVertical, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import DashboardVendedor from './DashboardVendedor';
import NotificacoesVendedor from "./NotificacoesVendedor";
import InventarioVendedor from "./InventarioVendedor";
import Vendas from "./Vendas";

const HomeDashboard = () => {
  const [currentView, setCurrentView] = useState('Inicio');

  useEffect(() => {
    const body = document.querySelector("body");
    const sidebar = body.querySelector(".sidebar");
    const toggle = body.querySelector(".toggle");

    const handleToggleClick = () => {
      sidebar.classList.toggle("closed");
    };

    toggle.addEventListener("click", handleToggleClick);

    return () => {
      toggle.removeEventListener("click", handleToggleClick);
    };
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'Inicio':
        return <DashboardVendedor />;
      case 'Notificacoes':
        return <NotificacoesVendedor />;
      case 'Vendas':
        return <Vendas />;
      case 'Inventario':
        return <InventarioVendedor />;
      case 'Relatorio':
        return <div className="texto">Relatório</div>;
      default:
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
    }
  };

  const getHelmetTitle = () => {
    switch (currentView) {
      case 'Inicio':
        return 'Início';
      case 'Notificacoes':
        return 'Notificações';
      case 'Vendas':
        return 'Vendas';
      case 'Inventario':
        return 'Inventário';
      case 'Relatorio':
        return 'Relatório';
      default:
        return 'Não definido';
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>{getHelmetTitle()}</title>
      </Helmet>

      <nav className="sidebar closed">
        <header>
          <div className="panel-logo">
            <span className="icon-logo"><FontAwesomeIcon icon={faHandshake} className="icon-logotipo"/></span>
            <span className="logotipo">Logo</span>
          </div>

          <div className="toggle">
            <FontAwesomeIcon icon={faChevronRight} className="toggle-icon"/>
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="nav-list">
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Inicio' ? 'active' : ''}`} onClick={() => setCurrentView('Inicio')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faHouse} className="nav-icon"/>
                    <span className="closed-nav-text">Início</span>
                  </div>
                  <span className="text nav-text">Início</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Notificacoes' ? 'active' : ''}`} onClick={() => setCurrentView('Notificacoes')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faBell} className="nav-icon"/>
                    <span className="closed-nav-text">Notificações</span>
                  </div>
                  <span className="text nav-text">Notificações</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Vendas' ? 'active' : ''}`} onClick={() => setCurrentView('Vendas')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faTag} className="nav-icon"/>
                    <span className="closed-nav-text">Vendas</span>
                  </div>
                  <span className="text nav-text">Vendas</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Inventario' ? 'active' : ''}`} onClick={() => setCurrentView('Inventario')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faCartFlatbed} className="nav-icon"/>
                    <span className="closed-nav-text">Inventário</span>
                  </div>
                  <span className="text nav-text">Inventário</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Relatorio' ? 'active' : ''}`} onClick={() => setCurrentView('Relatorio')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faSquarePollVertical} className="nav-icon"/>
                    <span className="closed-nav-text">Relatório</span>
                  </div>
                  <span className="text nav-text">Relatório</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="content-bottom">
            <li className="btn-logout">
              <a href="#" id="linkLogout" className={`nav-link ${currentView === 'Logout' ? 'active' : ''}`} onClick={() => setCurrentView('Logout')}>
                <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faRightFromBracket} className="nav-icon"/>
                  <span className="closed-nav-text">Sair</span>
                </div>
                <span className="text nav-text">Sair</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
      
      <div className="main">
        {renderView()}
      </div>
    </div>
  );
};

export default HomeDashboard;
