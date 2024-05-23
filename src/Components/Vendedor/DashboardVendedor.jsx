import React from 'react';
import './DashboardVendedor.css';

const DashboardVendedor = () => {
    return (
        <div className="dashboard-vendedor">
            <h2>Seja bem-vindo(a), @usuario!</h2>
            <div className="cards-container">
                <div className="card" style={{ backgroundColor: '#B5CCD4' }}>Gráfico 1</div>
                <div className="card" style={{ backgroundColor: '#CFFFDA' }}>Gráfico 2</div>
                <div className="card" style={{ backgroundColor: '#EDDFFE' }}>Gráfico 3</div>
            </div>
            <div className="line-chart-container">
                <p>Área do gráfico de linhas</p>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Produtos vendidos</th>
                            <th>Cliente</th>
                            <th>Valor total</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produto A</td>
                            <td>10</td>
                            <td>R$ 100,00</td>
                            <td>00/00/0000 00:00</td>
                        </tr>
                        <tr>
                            <td>Produto B</td>
                            <td>5</td>
                            <td>R$ 50,00</td>
                            <td>00/00/0000 00:00</td>
                        </tr>
                        <tr>
                            <td>Produto C</td>
                            <td>20</td>
                            <td>R$ 200,00</td>
                            <td>00/00/0000 00:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardVendedor;
