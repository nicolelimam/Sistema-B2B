import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ImportarPedidos.css';

function ImportarPedidos({ onClose }) {
  const inputFileRef = useRef(null);

  const handleUploadButtonClick = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Arquivo selecionado:", file.name);
    document.getElementById('nomeArquivo').innerText = file.name;
  };

  return (
    <div className="modal-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-importar-pedidos">
        <div className="top">
          <h3>Importar arquivo</h3>
        </div>
        <br />
        <form action="" className="form-importar-pedidos">
          <p>
            Envie um arquivo XML ou CSV com dados de pedidos anteriores (ou
            novos) que ainda não estão no sistema. Esses dados serão automaticamente adicionados à lista.
          </p>
          <div className="panel-upload">
            <div className="btn-upload" onClick={handleUploadButtonClick}>
                <FontAwesomeIcon icon={faCloudArrowUp} className="icon-btn-importar"/>
                <input
                  type="file"
                  name="btnUpload"
                  id="btnUpload"
                  ref={inputFileRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }} 
                  accept=".csv,.xml" 
                  multiple={false} // permite apenas um arquivo por vez
                />
                <span className="btn-upload-txt">
                    Clique aqui para fazer upload
                </span>
            </div>
          </div>
          <span id="nomeArquivo" className="nome-arquivo-importado">Nenhum arquivo selecionado</span>
          <br />
          <input type="submit" value="IMPORTAR" id="btnImportar"/>
          <button type="button" id="btnCancelar" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default ImportarPedidos;
