import React from "react";
import './CadastroPage.css'; 
import cadastro_img from '../Assets/cadastro-img.svg';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const CadastroPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <Helmet>
                <title>Cadastro</title>
            </Helmet>
            <div className="left-cadastro">
                <div className="titulo">Cadastre-se</div>
                <div className="lbtxt">Insira suas informações nos campos disponíveis</div>
                <br />
                <img src={cadastro_img} alt="Cadastro" className="imagem"/>
            </div>
            
            <div className="right-cadastro">
                <div className="panel-cadastro">
                    <form>
                        <div className="input-cadastro">
                            <input type="text" name="campoNome" id="campoNome" placeholder="Nome" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" name="campoCNPJ" id="campoCNPJ" placeholder="CNPJ" className="campotxt"/>
                        </div>
                        <div className="input-cadastro div-select">
                            <select name="selectSetor" id="selectSetor">
                                <option value="">Selecione...</option>
                                <option value="op1">Setor 1</option>
                                <option value="op2">Setor 2</option>
                                <option value="op3">Setor 3</option>
                                <option value="op4">Setor 4</option>
                            </select>
                        </div>
                        <h3>Endereço</h3>
                        <div className="endereco-campos">
                            <div className="input-cadastro">
                            <input type="text" name="campoEndereco" id="campoEndereco" placeholder="Endereço" className="campotxt"/>
                            </div>
                            <div className="endereco-dados">
                                <div className="endereco-left">
                                    <input type="text" id="campoBairro" name="campoBairro" placeholder="Bairro" className="campotxt2"/>
                                    <input type="text" id="campoCidade" name="campoCidade" placeholder="Cidade" className="campotxt2"/>
                                </div>
                                <div className="endereco-right">
                                    <input type="text" id="campoCEP" name="campoCEP" placeholder="CEP" className="campotxt2"/>
                                    <input type="text" id="campoEstado" name="campoEstado" placeholder="Estado" className="campotxt2"/>
                                </div>
                            </div>
                        </div>
                        <h3>Contato</h3>
                        <div className="input-cadastro">
                            <input type="email" name="campoEmail" id="campoEmail" placeholder="Email" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" name="campoTelefone" id="campoTelefone" placeholder="Telefone" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" name="nomeContato" id="nomeContato" placeholder="Nome do contato principal" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" name="cargoContato" id="cargoContato" placeholder="Cargo do contato principal" className="campotxt"/>
                        </div>
                        <div className="btn-cadastro">
                            <span className="btn-cadastro-content">Criar conta</span>
                        </div>
                    </form>
                    <div className="alt">
                        <p>Já tem uma conta? <br />
                            <Link to="/">Faça login!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CadastroPage;
