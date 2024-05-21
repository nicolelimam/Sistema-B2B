import React, { useEffect } from "react";
import './HomeDashboard.css'; 
import { Helmet } from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse, faBell, faHandHoldingDollar, faCartFlatbed, faSquarePollVertical, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const HomeDashboard = () => {

  return (
      <div className="container">
        <Helmet>
            <title>Home | Dashboard</title>
        </Helmet>

        <nav className="sidebar">
            <header>
                <div className="panel-logo">
                    <span className="logotipo">Logo</span>
                </div>

                <FontAwesomeIcon icon={faChevronRight} className="toggle icon"/>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="nav-list">
                        <li className="nav-link">
                            <a href="">
                                <FontAwesomeIcon icon={faHouse} className="nav-icon"/>
                                <span className="text nav-text">Início</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <FontAwesomeIcon icon={faBell} className="nav-icon"/>
                                <span className="text nav-text">Notificações</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <FontAwesomeIcon icon={faHandHoldingDollar} className="nav-icon" />
                                <span className="text nav-text">Vendas</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <FontAwesomeIcon icon={faCartFlatbed} className="nav-icon"/>
                                <span className="text nav-text">Inventário</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <FontAwesomeIcon icon={faSquarePollVertical} className="nav-icon"/>
                                <span className="text nav-text">Relatório</span>
                            </a>
                        </li>
                        <li className="nav-link btn-logout">
                            <a href="">
                                <FontAwesomeIcon icon={faRightFromBracket} className="nav-icon"/>
                                <span className="text nav-text">Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
  );
};

export default HomeDashboard;
