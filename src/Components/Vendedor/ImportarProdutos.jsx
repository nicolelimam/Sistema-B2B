import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ImportarProdutos.css";

function ImportarProdutos({ onClose }) {
  function handleFileChange(event) {
    const fileName = event.target.files[0].name;
    const nomeArquivoSpan = document.getElementById("nomeArquivo");
    nomeArquivoSpan.textContent = fileName;
  }

  return (
    <div className="modal-container">
      <div className="overlay" onClick={onClose}></div>{" "}
      {/* Fecha o modal quando clicar na overlay */}
      <div className="modal-importar-produtos">
        <div className="top">
          <h3>Importar arquivo</h3>
        </div>
        <br />
        <form action="" className="form-importar-produtos">
          <p>
            Envie um arquivo XML ou CSV com dados de produtos cadastrados (ou
            novos) que ainda não estão no sistema. Esses dados serão
            automaticamente adicionados à lista.
          </p>
          <div className="panel-upload">
            <div className="btn-upload">
              <label htmlFor="btnUpload" className="btn-upload-label">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="icon-btn-importar"
                /> 
                <span className="btn-upload-txt">
                  Clique aqui para fazer upload
                </span>
              </label>
              <input
                type="file"
                name="btnUpload"
                id="btnUpload"
                accept=".csv,.xml"
                multiple={false}
                className="input-file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <span id="nomeArquivo" className="nome-arquivo-importado">
            Nenhum arquivo selecionado
          </span>
          <br />
          <input type="submit" value="IMPORTAR" id="btnImportar" />
          <button type="button" id="btnCancelar" onClick={onClose}>
            Cancelar
          </button>{" "}
        </form>
      </div>
    </div>
  );
}

export default ImportarProdutos;
