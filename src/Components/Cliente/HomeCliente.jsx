import React, { useEffect, useState } from "react";
import './HomeCliente.css'; 
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse, faRocket, faBell, faCartShopping, faReceipt, faHandshake, faHeadset, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import HomeContent from "./HomeContent";


function HomeCliente() {
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
        return <HomeContent />;
      case 'Notificacoes':
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
      case 'Descobrir':
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
      case 'Meu Carrinho':
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
      case 'Meus Pedidos':
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
      case 'Suporte':
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
      default:
        return <div className="texto">Ainda não há modal para exibir aqui</div>;
    }
  };

  const getHelmetTitle = () => {
    switch (currentView) {
      case 'Inicio':
        return 'Início';
      case 'Notificações':
        return 'Notificações';
      case 'Descobrir':
        return 'Descobrir';
      case 'Meu Carrinho':
        return 'Meu Carrinho';
      case 'Meus Pedidos':
        return 'Meus Pedidos';
      case 'Suporte':
        return 'Suporte';
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
                <a href="#" className={`nav-link ${currentView === 'Notificações' ? 'active' : ''}`} onClick={() => setCurrentView('Notificações')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faBell} className="nav-icon"/>
                    <span className="closed-nav-text">Notificações</span>
                  </div>
                  <span className="text nav-text">Notificações</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Descobrir' ? 'active' : ''}`} onClick={() => setCurrentView('Descobrir')}>
                  <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faRocket} className="nav-icon"/>
                    <span className="closed-nav-text">Descobrir</span>
                  </div>
                  <span className="text nav-text">Descobrir</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Meu Carrinho' ? 'active' : ''}`} onClick={() => setCurrentView('Meu Carrinho')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faCartShopping} className="nav-icon"/>
                    <span className="closed-nav-text">Meu Carrinho</span>
                  </div>
                  <span className="text nav-text">Meu Carrinho</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Meus Pedidos' ? 'active' : ''}`} onClick={() => setCurrentView('Meus Pedidos')}>
                  <div className="nav-icon-container">
                    <FontAwesomeIcon icon={faReceipt} className="nav-icon"/>
                    <span className="closed-nav-text">Meus Pedidos</span>
                  </div>
                  <span className="text nav-text">Meus Pedidos</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#" className={`nav-link ${currentView === 'Suporte' ? 'active' : ''}`} onClick={() => setCurrentView('Suporte')}>
                  <div className="nav-icon-container">
                  <FontAwesomeIcon icon={faHeadset} className="nav-icon"/>
                    <span className="closed-nav-text">Suporte</span>
                  </div>
                  <span className="text nav-text">Suporte</span>
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
  )
}

export default HomeCliente
