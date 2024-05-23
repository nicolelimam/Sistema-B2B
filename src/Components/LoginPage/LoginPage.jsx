import React, { useState } from "react";
import './LoginPage.css';
import { Helmet } from "react-helmet";
import login_img from '../Assets/login-img.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import RecuperarSenha from "./RecuperarSenha";

const LoginPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/cadastro');
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="left-login">
                <div className="titulo">Entre em sua conta</div>
                <div className="lbtxt">E tenha acesso a diversas oportunidades!</div>
                <br />
                <img src={login_img} alt="Login" className="imagem"/>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <div className="titulo2">Insira suas credenciais</div>
                    <br />
                    <form>
                        <div className="input">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                            <input type="email" name="campoEmail" id="campoEmail" placeholder="Email" className="campotxt"/>
                        </div>
                        <div className="input">
                            <FontAwesomeIcon icon={faLock} className="icon"/>
                            <input type="password" name="campoSenha" id="campoSenha" placeholder="Senha" className="campotxt"/>
                        </div>
                        <a href="#" className="redef-senha" onClick={handleForgotPasswordClick}>Esqueceu sua senha?</a><br />
                        {/* <button type="submit" id="btnLogin">LOGIN</button> */}
                        <div className="btn-login">
                            <span className="btn-login-content">Login</span>
                        </div>
                    </form>
                    <div className="alt">
                        <p>Ainda não tem uma conta? <br />
                            <Link to="/cadastro">Cadastre-se!</Link>
                        </p>
                    </div>
                </div>
            </div>
            {modalOpen && <RecuperarSenha onClose={closeModal} />}
        </div>
    );
};

export default LoginPage;
