import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.css";

const products = [
  {
    id: 1,
    name: "Produto 1",
    price: "R$ 100,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Produto 2",
    price: "R$ 200,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Produto 3",
    price: "R$ 300,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Produto 4",
    price: "R$ 400,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Produto 5",
    price: "R$ 500,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Produto 6",
    price: "R$ 600,00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Produto 7",
    price: "R$ 700,00",
    image: "https://via.placeholder.com/150",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function HomeContent() {
  return (
    <div className="home-content-cliente">
      <h2>Seja bem-vindo(a), @usuario!</h2>

      <div className="product-carousel-container">
        <Slider {...settings}>
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

          <div className="rcc-card">
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
              Valor total do pedido: R${" "}
              <span>700,00</span>
            </p>
          </div>

          <div className="rcc-card">
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
              Valor total do pedido: R${" "}
              <span>170,00</span>
            </p>
          </div>

          <div className="rcc-card">
            <h5 className="nome-produto">Pedido #003</h5>
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
              Valor total do pedido: R${" "}
              <span>700,00</span>
            </p>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
