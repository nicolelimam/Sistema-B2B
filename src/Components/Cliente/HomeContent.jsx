import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";
import imagem_produto from "../Assets/icon-produto2.png";
import InfoPedidoCliente from "./InfoPedidoCliente";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Produto 1",
    price: "R$ 100,00",
    image: imagem_produto,
  },
  {
    id: 2,
    name: "Produto 2",
    price: "R$ 200,00",
    image: imagem_produto,
  },
  {
    id: 3,
    name: "Produto 3",
    price: "R$ 300,00",
    image: imagem_produto,
  },
  {
    id: 4,
    name: "Produto 4",
    price: "R$ 400,00",
    image: imagem_produto,
  },
  {
    id: 5,
    name: "Produto 5",
    price: "R$ 500,00",
    image: imagem_produto,
  },
  {
    id: 6,
    name: "Produto 6",
    price: "R$ 600,00",
    image: imagem_produto,
  },
  {
    id: 7,
    name: "Produto 7",
    price: "R$ 700,00",
    image: imagem_produto,
  },
  {
    id: 8,
    name: "Produto 8",
    price: "R$ 1000,00",
    image: imagem_produto,
  },
  {
    id: 8,
    name: "Produto 9",
    price: "R$ 1200,00",
    image: imagem_produto,
  },
  {
    id: 8,
    name: "Produto 10",
    price: "R$ 1200,00",
    image: imagem_produto,
  },
  {
    id: 8,
    name: "Produto 11",
    price: "R$ 1250,00",
    image: imagem_produto,
  },
  {
    id: 8,
    name: "Produto 12",
    price: "R$ 1250,00",
    image: imagem_produto,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function HomeContent() {
  const [selectedPedido, setSelectedPedido] = useState(null);

  const handleCardClick = (pedido) => {
    setSelectedPedido(pedido);
  };

  const handleCloseModal = () => {
    setSelectedPedido(null);
  };

  return (
    <div className="home-content-cliente">
      <h2>Seja bem-vindo(a), @usuario!</h2>

      <h3>Recomendados para você</h3>
      <div className="product-carousel-container">
        <Slider className="carousel-products" {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-juros">Sem juros</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="registros-compras-cliente">
        <div className="top-rcc">
          <h3>Suas últimas compras</h3>
          <button id="btnVerMais">Ver tudo</button>
        </div>
        <div className="panel-cards-rcc">
          <div
            className="rcc-card"
            onClick={() =>
              handleCardClick({
                id: "001",
                produtos: [
                  { nome: "Item 1", quantidade: 1, vendedor: "Vendedor 1" },
                  { nome: "Item 2", quantidade: 1, vendedor: "Vendedor 2" },
                ],
                cliente: "Cliente 1",
                data: "00/00/0000",
                meio_pagamento: "Cartão de crédito",
                observacoes: "Nenhuma observação",
              })
            }
          >
            <h5 className="nome-produto">Pedido #001</h5>
            <div className="lista-itens-pedido">
              <div className="left-lista-itens-pedido">
                <p className="item-pedido">Item 1</p>
                <p className="valor-item-pedido">R$ 500,00</p>
              </div>
              <div className="right-lista-itens-pedido">
                <p className="item-pedido">Item 2</p>
                <p className="valor-item-pedido">R$ 200,00</p>
              </div>
            </div>
            <p className="valor-total-pedido">
              Valor total do pedido: R$ <span>700,00</span>
            </p>
          </div>

          <div
            className="rcc-card"
            onClick={() =>
              handleCardClick({
                id: "002",
                produtos: [
                  { nome: "Item 1", quantidade: 1, vendedor: "Vendedor 1" },
                  { nome: "Item 2", quantidade: 1, vendedor: "Vendedor 2" },
                ],
                cliente: "Cliente 2",
                data: "00/00/0000",
                meio_pagamento: "Cartão de crédito",
                observacoes: "Nenhuma observação",
              })
            }
          >
            <h5 className="nome-produto">Pedido #002</h5>
            <div className="lista-itens-pedido">
              <div className="left-lista-itens-pedido">
                <p className="item-pedido">Item 1</p>
                <p className="valor-item-pedido">R$ 140,00</p>
              </div>
              <div className="right-lista-itens-pedido">
                <p className="item-pedido">Item 2</p>
                <p className="valor-item-pedido">R$ 30,00</p>
              </div>
            </div>
            <p className="valor-total-pedido">
              Valor total do pedido: R$ <span>170,00</span>
            </p>
          </div>
        </div>
      </div>
      {selectedPedido && (
        <InfoPedidoCliente pedido={selectedPedido} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default HomeContent;
