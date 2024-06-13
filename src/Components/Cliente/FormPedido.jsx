import React from "react";
import "./FormPedido.css";
import img_prod from "../Assets/icon-produto-sb.png";

function FormPedido({ onCancelarPedidoClick }) {
  return (
    <div className="form-pedido-container">
      <div className="top-fp">
        <h1>Fazer pedido</h1>
        <button id="btnCancelarPedido" onClick={onCancelarPedidoClick}>
          Cancelar
        </button>
      </div>
      <div className="formulario-container-fp">
        <div className="left-fp">
          <div className="panel-itens-pedido-fp">
            <div className="item-pedido-fp">
              <div className="left-ip-fp">
                <div className="imagem-produto-fp">
                  <img src={img_prod} alt="Imagem do produto" />
                </div>
                <h5 className="nome-produto-fp">Produto 1</h5>
              </div>
              <div className="right-ip-fp">
                <p className="valor-unitario-prod-fp">
                  R$ <span className="valor-prod">400</span>
                </p>
                <p className="quantidade-prod-fp">3x</p>
              </div>
            </div>

            <div className="item-pedido-fp">
              <div className="left-ip-fp">
                <div className="imagem-produto-fp">
                  <img src={img_prod} alt="Imagem do produto" />
                </div>
                <h5 className="nome-produto-fp">Produto 2</h5>
              </div>
              <div className="right-ip-fp">
                <p className="valor-unitario-prod-fp">
                  R$ <span className="valor-prod">1000</span>
                </p>
                <p className="quantidade-prod-fp">1x</p>
              </div>
            </div>
          </div>
          <div className="panel-envio-produto">
            <h3>Envio e Entrega</h3>
            <span>
              Confirme se o seu endereço está sendo informado corretamente.
            </span>
            <div className="endereco-cliente">
              <div className="left-endereco-fp">
                <p className="endereco-cliente-fp">
                  Linha de endereço <br />
                  CEP, Cidade, Estado
                </p>
              </div>
              <div className="right-endereco-fp">
                <button className="btn-mudar-endereco">Mudar endereço</button>
              </div>
            </div>
          </div>
          <div className="panel-pagamento-fp">
            <h3>Meio de pagamento</h3>
            <div className="radio-btn-fp">
              <input type="radio" name="" id="opPIX" className="btn-radio-fp" />
              <label htmlFor="PIX">PIX</label>
            </div>
            <div className="radio-btn-fp">
              <input
                type="radio"
                name=""
                id="opCartao"
                className="btn-radio-fp"
              />
              <label htmlFor="opCartao">Cartão de crédito/débito</label>
            </div>
            <div className="radio-btn-fp">
              <input
                type="radio"
                name=""
                id="opBoleto"
                className="btn-radio-fp"
              />
              <label htmlFor="opBoleto">Boleto</label>
            </div>
          </div>
          <div className="panel-mensagem">
            <h3>Mensagem para o vendedor (opcional):</h3>
            <textarea
              name=""
              id=""
              className="campo-mensagem-cliente-fp"
              placeholder="Escreva sua mensagem aqui"
            ></textarea>
          </div>
        </div>
        <div className="right-fp">
            <div className="panel-descontos">
                <h3>Descontos</h3>
                <p className="descontos-fp">
                    [Configurações de desconto de acordo com as condições comerciais]
                </p>
                <h3>Impostos</h3>
                <p className="impostos-fp">
                    [Configurações de impostos de acordo com as condições comerciais]
                </p>
                <h3>Garantia</h3>
                <p className="garantia-fp">
                    6 meses de garantia.
                </p>
            </div>
            <div className="panel-btns-fp">
                <button id="btnVoltarCarrinho">
                    VOLTAR AO CARRINHO
                </button>
                <button id="btnFinalizarPedido">
                    FINALIZAR PEDIDO
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FormPedido;
