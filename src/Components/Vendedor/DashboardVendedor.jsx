import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import './DashboardVendedor.css';
import graficoPizza from "../json/graficoPizza.json";
import graficoLinha from "../json/graficoLinha.json";

const DashboardVendedor = () => {
    const [salesData, setSalesData] = useState({});
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setSalesData(graficoLinha.sales);
        setProductData(graficoPizza.products);
    }, []);

    const lineChartData = {
        labels: Object.keys(salesData),
        datasets: [
            {
                label: 'Valores Obtidos (R$)',
                data: Object.values(salesData),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const pieChartData = {
        labels: productData.map(product => product.name),
        datasets: [
            {
                label: 'Vendas de Produtos',
                data: productData.map(product => product.sales),
                backgroundColor: [
                    'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 
                    'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                hoverOffset: 4
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right', 
                labels: {
                    boxWidth: 10, 
                    font: {
                        size: 10 
                    }
                }
            }
        }
    };

    return (
        <div className="dashboard-vendedor">
            <h2>Seja bem-vindo(a), @usuario!</h2>
            <div className="cards-container">
                <div className="card card-text" style={{ backgroundColor: '#B5CCD4' }}>
                    <h4>Vendas recentes</h4>
                    <p>Você realizou</p>
                    <span className='numero-vendas'>264 vendas</span>
                    <p>nos últimos 10 dias</p>
                </div>
                <div className="card card-text" style={{ backgroundColor: '#CFFFDA' }}>
                    <h4>Faturamento</h4>
                    <p>Em suas vendas você faturou</p>
                    <span className="faturamento">
                        R$ 1000000
                    </span>
                </div>
                <div className="card chart-pie" style={{ backgroundColor: '#EDDFFE' }}>
                    <Pie data={pieChartData} options={chartOptions} />
                </div>
            </div>
            <div className="line-chart-container">
                <Line data={lineChartData} options={chartOptions} />
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
