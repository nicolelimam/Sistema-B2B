import React, { useState } from "react";
import "./EditarProduto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function EditarProduto({ onClose }) { 
  const [fileName, setFileName] = useState(""); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="editar-prod-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="panel-formulario-editar-prod">
        <form action="" className="form-editar-produto">
          <div className="top-editar-prod">
            <button className="btn-fechar" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h2>Editar produto</h2>
          </div>
          <div className="main-content-form">
            <div className="left-mcf">
              <label htmlFor="nomeProduto" className="lb-form-editar-prod">
                Nome do produto
              </label>
              <input type="text" name="nomeProduto" id="nomeProduto" />
              <label htmlFor="caracteristicasProd" className="lb-form-editar-prod">
                Características do produto
              </label>
              <textarea
                name="caracteristicasProd"
                id="caracteristicasProd"
                wrap="wrap"
              ></textarea>
              <label htmlFor="descricaoProd" className="lb-form-editar-prod">
                Descrição
              </label>
              <textarea
                name="descricaoProd"
                id="descricaoProd"
                wrap="wrap"
              ></textarea>
            </div>
            <div className="right-mcf">
              <label htmlFor="quantidadeProd" className="lb-form-editar-prod">
                Quantidade
              </label>
              <input type="text" name="quantidadeProd" id="quantidadeProd" />
              <label htmlFor="precoProd" className="lb-form-editar-prod">
                Preço
              </label>
              <span className="campo-preco">
                R$ <input type="text" name="precoProd" id="precoProd" />
              </span>
              <label htmlFor="btn-imagem-prod" className="lb-form-editar-prod">
                Imagem do produto
              </label>
              <div className="btn-imagem-prod">
                <label htmlFor="imagemProd" className="custom-file-upload">
                  Selecione uma imagem
                </label>
                <input
                  type="file"
                  name="imagemProd"
                  id="imagemProd"
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />

                <span id="texto-imagem-prod">{fileName}</span>
              </div>
              <label htmlFor="checkbox-group-cp" className="lb-form-editar-prod">
                Condições comerciais aplicáveis
              </label>
              <div className="checkbox-group-cp">
                <div className="cb-txt">
                  <input type="checkbox" name="cbDesconto" id="cbDesconto" />
                  <label htmlFor="cbDesconto" className="lb-checkbox-cp">
                    {" "}
                    Desconto
                  </label>
                </div>
                <div className="cb-txt">
                  <input type="checkbox" name="cbImpostos" id="cbImpostos" />
                  <label htmlFor="cbImpostos" className="lb-checkbox-ep">
                    {" "}
                    Impostos
                  </label>
                </div>
                <div className="cb-txt">
                  <input type="checkbox" name="cbFrete" id="cbFrete" />
                  <label htmlFor="cbFrete" className="lb-checkbox-ep">
                    {" "}
                    Frete grátis
                  </label>
                </div>
              </div>
              <button type="submit" id="btnEditarProduto">
                SALVAR ALTERAÇÕES
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarProduto;
