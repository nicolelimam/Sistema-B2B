import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./InfoProduto.css";
import icon_produto from "../Assets/icon-produto2.png";
import PopupConfirmaExclusao from "./PopupConfirmaExclusao";
import EditarProduto from "./EditarProduto"; 

function InfoProduto({ onClose }) {
  const [isPopupConfirmaExclusaoOpen, setIsPopupConfirmaExclusaoOpen] = useState(false);
  const [isEditarProdutoOpen, setIsEditarProdutoOpen] = useState(false); // State to control EditarProduto modal

  const openPopupConfirmaExclusao = () => {
    setIsPopupConfirmaExclusaoOpen(true);
  };

  const closePopupConfirmaExclusao = () => {
    setIsPopupConfirmaExclusaoOpen(false);
  };

  const openEditarProduto = () => {
    setIsEditarProdutoOpen(true);
  };

  const closeEditarProduto = () => {
    setIsEditarProdutoOpen(false);
  };

  return (
    <div className="modal-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-info-produto">
        <div className="top">
          <button className="btn-fechar" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className="icon-btn-fechar" />
          </button>
          <h2>Sobre o produto</h2>
        </div>
        <div className="info-produto-container">
          <div className="info-prod">
            <div className="left-info-prod">
              <div className="imagem-prod">
                <img src={icon_produto} alt="" />
              </div>
            </div>
            <div className="mid-info-prod">
              <h4 className="nome-produto">Produto 5</h4>
              <p>
                Vendido por <span className="nome-vendedor">Empresa 1</span>
              </p>
              <br />
              <h1>
                R$ <span className="info-preco-produto">500</span>
              </h1>
              <span className="juros">Sem juros</span>
              <br />
              <h5>Características gerais do produto:</h5>
              <p className="caracteristicas-prod">
                Característica 1 <br />
                Característica 2 <br />
                Característica 3 <br />
              </p>
            </div>
            <div className="right-info-prod">
              <button id="btnEditarProd" className="btn-info-prod" onClick={openEditarProduto}>
                Editar
              </button>
              <button
                id="btnExcluirProd"
                className="btn-info-prod"
                onClick={openPopupConfirmaExclusao}
              >
                Excluir
              </button>
            </div>
          </div>
          <h3>Descrição</h3>
          <p className="descricao-prod">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            blandit quam. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nulla vitae ipsum volutpat, fringilla velit quis, lacinia
            neque. Curabitur sed sem elit. Donec sed nibh gravida odio sagittis
            iaculis. Nulla tempus a felis id efficitur. Maecenas quis lacinia
            neque, a finibus enim. Nam ac sem at neque pharetra porta vitae ut
            sem. Nullam maximus et sapien sed semper. Nunc a diam sit amet magna
            fermentum finibus. Donec imperdiet magna fringilla, mollis tellus
            et, egestas risus. Duis augue magna, placerat convallis lacinia at,
            finibus pellentesque ex. Integer imperdiet tellus id dui tempor
            varius. In hac habitasse platea dictumst. Maecenas nec nisl
            sagittis, suscipit dolor eget, suscipit lorem. Vestibulum eu eros
            elit.
          </p>
        </div>
      </div>
      {isPopupConfirmaExclusaoOpen && (
        <PopupConfirmaExclusao onClose={closePopupConfirmaExclusao} />
      )}
      {isEditarProdutoOpen && (
        <EditarProduto onClose={closeEditarProduto} /> // Render the EditarProduto modal
      )}
    </div>
  );
}

export default InfoProduto;
