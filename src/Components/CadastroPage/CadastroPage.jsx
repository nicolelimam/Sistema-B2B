import React, { useState } from "react";
import './CadastroPage.css'; 
import cadastro_img from '../Assets/cadastro-img.svg';
import { Helmet } from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

const CadastroPage = () => {
    const navigate = useNavigate();
    const [selectedUserType, setSelectedUserType] = useState("");

    const handleLoginClick = () => {
        navigate('/');
    };

    const handleRadioChange = (e) => {
        setSelectedUserType(e.target.value);
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
                        <br /><br /><br />
                    <div className="tipo-usuario-panel">
                            <label htmlFor="tipoUsuario" className="lb-radio">Ao utilizar o sistema, você pretende</label><br />
                            <div className="radio-btn" onClick={() => setSelectedUserType("vendedor")}>
                                <input 
                                    type="radio" 
                                    name="tipoUsuario" 
                                    id="usuarioVendedor" 
                                    value="vendedor" 
                                    checked={selectedUserType === "vendedor"} 
                                    onChange={handleRadioChange}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="usuarioVendedor" className="check">
                                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                                        <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>
                                </label>
                                <span className="lb-btn-radio">Ofertar meus produtos para empresas clientes</span>
                            </div>
                            <div className="radio-btn" onClick={() => setSelectedUserType("cliente")}>
                                <input 
                                    type="radio" 
                                    name="tipoUsuario" 
                                    id="usuarioCliente" 
                                    value="cliente" 
                                    checked={selectedUserType === "cliente"} 
                                    onChange={handleRadioChange}
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="usuarioCliente" className="check">
                                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                                        <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>
                                </label>
                                <span className="lb-btn-radio">Receber ofertas de produtos de empresas fornecedoras</span>
                            </div>
                        </div>
                        <br />
                        <div className="input-cadastro">
                            <input type="text" name="campoNome" id="campoNome" placeholder="Nome" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <InputMask mask="99.999.999/9999-99" name="campoCNPJ" id="campoCNPJ" placeholder="CNPJ" className="campotxt"/>
                        </div>
                        <div className="input-cadastro div-select">
                            <select name="selectSetor" id="selectSetor">
                                <option value="">Setor/Indústria</option>
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
                                    <InputMask mask="99999-999" id="campoCEP" name="campoCEP" placeholder="CEP" className="campotxt2"/>
                                    <input type="text" id="campoEstado" name="campoEstado" placeholder="Estado" className="campotxt2"/>
                                </div>
                            </div>
                        </div>
                        <h3>Contato</h3>
                        <div className="input-cadastro">
                            <input type="email" name="campoEmail" id="campoEmail" placeholder="Email" className="campotxt"/>
                        </div>
                        <div className="input-cadastro">
                            <InputMask mask="(99) 99999-9999" name="campoTelefone" id="campoTelefone" placeholder="Telefone" className="campotxt"/>
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
