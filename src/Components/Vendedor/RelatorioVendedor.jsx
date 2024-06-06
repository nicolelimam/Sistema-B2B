import React from "react";
import "./RelatorioVendedor.css"

function RelatorioVendedor() {
  return (
    <div className="relatorio-container">
      <h1>Relatório e Análise de Vendas</h1>

      <div className="relatorio-content">
        <div className="left-rc">
          <h4>Seu desempenho como vendedor é</h4>
          <p className="desempenho-vendedor bom">
            Ótimo (80% de aprovação dos compradores)
          </p>
          <h4>Sua média de vendas mensais é</h4>
          <p className="media-vendas-mensais">Cerca de 450 vendas por mês</p>
          <h4>Você atualiza seu inventário...</h4>
          <p className="freq-atualizacao-inventario">
            Frequentemente (7 vezes nesse mês)
          </p>
        </div>
        <div className="right-rc">
          <div className="panel-right-rc">
            <h2>@NomeEmpresa</h2>
            <h5>Número total de vendas</h5>
            <span className="vendas-total">5786</span>
            <h5>Lucro total</h5>
            <span className="lucro-total">R$000000</span>
            <h5>Há quanto tempo está no sistema?</h5>
            <span className="tempo-cadastro-vendedor">Há 6 meses</span>
          </div>
        </div>
      </div>

      <div className="container-grafico-relatorio">
        <h3>Confira seus produtos mais populares nesse último mês</h3>
        <div className="chart-relatorio">
           
        </div>
      </div>
    </div>
  );
}

export default RelatorioVendedor;
