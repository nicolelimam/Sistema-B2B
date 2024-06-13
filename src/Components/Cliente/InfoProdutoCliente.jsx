import React from 'react';
import './InfoProdutoCliente.css';

function InfoProdutoCliente({ produto, onBackClick }) {
  return (
    <div className='info-produto-cliente-container'>
      <h2><span className='btn-voltar-modal-pai' onClick={onBackClick}>Descobrir /</span> Informações do produto</h2>
      <div className="top-ipc">
        <div className="left-ipc">
            <div className="imagem-produto-ipc">
                <img src={produto.imagem} alt={`Imagem do ${produto.nome}`} className='icon-img-ipc' />
            </div>
        </div>
        <div className="right-ipc">
            <p className="nome-produto-ipc">{produto.nome}</p>
            <p>Por <span className='nome-vendedor-ipc'>{produto.vendedor}</span></p>

            <p className="preco-produto-ipc">
            R$ <span className="preco-ipc">{produto.preco}</span>
            </p>
            <span className="juros-ipc">Sem juros</span>

            <h4>Características gerais do produto</h4>
            <p>
            Caracteristica 1 <br />
            Característica 2 <br />
            Característica 3 <br />
            Característica 4 <br />
            Característica 5 <br />
            Característica 6 <br />
            </p>
            <div className="button-group-ipc">
                <button id="btnComprar">Comprar</button>
                <button id="btnAddItemCarrinho">Adicionar ao carrinho</button>
            </div>
        </div>
      </div>
      <div className="bottom-ipc">
        <h3>Descrição</h3>
        <p className="descricao-produto-ipc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis ante, dignissim et leo ut, fermentum fringilla ex. Morbi eget risus sed leo eleifend vestibulum suscipit in nibh. Proin efficitur vitae dolor in feugiat. Nam lobortis enim id cursus hendrerit. Maecenas id justo ultricies, vestibulum nulla vitae, elementum urna. Pellentesque dapibus ultricies placerat. Etiam varius sodales vestibulum. Nullam porttitor elit eget feugiat rhoncus. Nunc augue eros, sagittis a fermentum vel, dapibus eget odio. In semper feugiat dignissim. Phasellus venenatis dolor lacinia tortor molestie, sit amet fermentum nibh vehicula. Cras facilisis tincidunt nisl sit amet pretium. Integer cursus erat eu sem cursus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer bibendum ultrices lectus et pulvinar.
        Quisque ultricies scelerisque fringilla. Phasellus consequat vulputate tellus, vel condimentum tellus. Donec id velit quam. Phasellus dapibus tortor in massa efficitur, ac convallis turpis consectetur. Morbi aliquet arcu nibh, eget mollis justo iaculis eu. In pellentesque velit turpis, nec consectetur lorem posuere id. Duis tristique, sapien sit amet pulvinar fringilla, justo nisl luctus nulla, id commodo enim mi quis sem. Donec lobortis eu odio non convallis. In diam ligula, blandit ac elit non, vehicula porttitor nulla.
        </p> 
        <br />
      </div>
    </div>
  );
}

export default InfoProdutoCliente;
