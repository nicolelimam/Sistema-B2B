import React, { useState } from 'react';
import './PopupTornarDisponivel.css';
import { Button } from 'bootstrap';

function PopupTornarDisponivel({ onClose }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setQuantity(1);
    } else {
      const number = parseInt(value, 10);
      if (!isNaN(number) && number > 0) {
        setQuantity(number);
      }
    }
  };

  const handleInputBlur = () => {
    if (quantity === '') {
      setQuantity(1);
    }
  };

  return (
    <div className='tornar-disponivel-container'>
      <div className="overlay">
      </div>
        <div className="panel-tornar-disponivel">
            <h2>Renovar produto no estoque</h2>
            <p>Informe a quantidade de unidades disponíveis</p>
            <div className="btn-numerico">
                <button className="btn-sub" onClick={handleDecrement}>
                    -
                </button>
                <input
                  type="text"
                  className='campo-btn-numerico'
                  value={quantity}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                <button className="btn-soma" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="btn-group-pfd">
                <button className="btn-cancelar-ptd" onClick={onClose}>Cancelar</button>
                <button type="submit" className='btn-tornar-disponivel'>Tornar disponível</button>
            </div>
        </div>
    </div>
  )
}

export default PopupTornarDisponivel;
