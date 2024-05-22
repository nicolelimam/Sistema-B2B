import React, { useEffect } from "react";
import './HomeDashboard.css'; 
import { Helmet } from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo_img from '../Assets/icon-logotipo.svg';
import { faChevronRight, faHouse, faBell, faTag, faCartFlatbed, faHandshake, faSquarePollVertical, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const HomeDashboard = () => {

  useEffect(() => {
    //Definindo as configurações do menu para expandir e diminuir
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

  return (
      <div className="container">
        <Helmet>
            <title>Home | Dashboard</title>
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
                            <a href="" className="active" id="linkInicio">
                                <FontAwesomeIcon icon={faHouse} className="nav-icon"/>
                                <span className="text nav-text">Início</span>
                            </a>
                            <span className="nav-tooltip">
                                Início
                            </span>
                        </li>
                        <li className="nav-link">
                            <a href="" id="linkNotificacoes">
                                <FontAwesomeIcon icon={faBell} className="nav-icon"/>
                                <span className="text nav-text">Notificações</span>
                            </a>
                            <span className="nav-tooltip">
                                Notificações
                            </span>
                        </li>
                        <li className="nav-link">
                            <a href="" id="linkVendas">
                                <FontAwesomeIcon icon={faTag} className="nav-icon"/>
                                <span className="text nav-text">Vendas</span>
                            </a>
                            <span className="nav-tooltip">
                                Vendas
                            </span>
                        </li>
                        <li className="nav-link">
                            <a href="" id="linkInventario">
                                <FontAwesomeIcon icon={faCartFlatbed} className="nav-icon"/>
                                <span className="text nav-text">Inventário</span>
                            </a>
                            <span className="nav-tooltip">
                                Inventário
                            </span>
                        </li>
                        <li className="nav-link">
                            <a href="" id="linkRelatorio">
                                <FontAwesomeIcon icon={faSquarePollVertical} className="nav-icon"/>
                                <span className="text nav-text">Relatório</span>
                            </a>
                            <span className="nav-tooltip">
                                Relatório
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="content-bottom">
                    <li className="btn-logout">
                        <a href="" id="linkLogout">
                            <FontAwesomeIcon icon={faRightFromBracket} className="nav-icon"/>
                            <span className="text nav-text">Sair</span>
                        </a>
                        <span className="nav-tooltip tooltip-logout">
                                Relatório
                        </span>
                    </li>
                </div>
            </div>
        </nav>

        <div className="main">
            <div className="texto">Dashboard</div>
        </div>
      </div>
  );
};

export default HomeDashboard;
