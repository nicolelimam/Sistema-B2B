import React from 'react';
import './RecuperarSenha.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RecuperarSenha({ onClose }) {
  return (
    <div className="modal-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-recuperar-senha">
        <div className="top">
          <button className='btn-fechar' onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className='icon-btn-fechar'/>
          </button>
          <h3>Recuperar senha</h3>
        </div>
        <br />
        <form action="" className='form-redef-senha'>
          <p>Não se lembra da sua senha? Não tem problema!
            Insira seu email no campo abaixo e nós enviaremos 
            um código de confirmação para que você possa redefinir sua chave de acesso.</p>
            <input type="email" name="emailUsuario" id="emailUsuario" placeholder='Email para redefinição de senha' />
            <button type="submit" className='btn-enviar'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default RecuperarSenha;
