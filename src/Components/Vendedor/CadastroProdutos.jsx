import React, { useState } from "react";
import "./CadastroProdutos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CadastroProdutos({ onClose }) {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Nenhum arquivo selecionado");
    }
  };

  return (
    <div className="cadastro-prod-container">
      <div className="overlay"></div>
      <div className="panel-formulario-cad-prod">
        <form action="" className="form-cadastro-produto">
          <div className="top-cad-prod">
            <h2>Cadastrar novo produto</h2>
          </div>
          <div className="main-content-form">
            <div className="left-mcf">
              <label htmlFor="nomeProduto" className="lb-form-cad-prod">
                Nome do produto
              </label>
              <input type="text" name="nomeProduto" id="nomeProduto" />
              <label htmlFor="caracteristicasProd" className="lb-form-cad-prod">
                Características do produto
              </label>
              <textarea
                name="caracteristicasProd"
                id="caracteristicasProd"
                wrap="wrap"
              ></textarea>
              <label htmlFor="descricaoProd" className="lb-form-cad-prod">
                Descrição
              </label>
              <textarea
                name="descricaoProd"
                id="descricaoProd"
                wrap="wrap"
              ></textarea>
            </div>
            <div className="right-mcf">
              <label htmlFor="quantidadeProd" className="lb-form-cad-prod">
                Quantidade
              </label>
              <input type="text" name="quantidadeProd" id="quantidadeProd" />
              <label htmlFor="precoProd" className="lb-form-cad-prod">
                Preço
              </label>
              <span className="campo-preco">
                R$ <input type="text" name="precoProd" id="precoProd" />
              </span>
              <label htmlFor="btn-imagem-prod" className="lb-form-cad-prod">
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
              <label htmlFor="checkbox-group-cp" className="lb-form-cad-prod">
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
                  <label htmlFor="cbImpostos" className="lb-checkbox-cp">
                    {" "}
                    Impostos
                  </label>
                </div>
                <div className="cb-txt">
                  <input type="checkbox" name="cbFrete" id="cbFrete" />
                  <label htmlFor="cbFrete" className="lb-checkbox-cp">
                    {" "}
                    Frete grátis
                  </label>
                </div>
              </div>
              <button type="submit" id="btnCadastrarProduto">
                CADASTRAR NOVO PRODUTO
              </button>
              <button id="btnCancelar" onClick={onClose}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroProdutos;
