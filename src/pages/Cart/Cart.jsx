import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Quitar</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
    if (cartItems[item.id] > 0) {
        return (
            <div key={item.id} className="cart-items-title cart-items-item">
                <img src={url + "/images/" + item.image} alt={item.name} className="cart-item-image" />
                <p>{item.name}</p>
                <p>S/. {item.price.toFixed(2)}</p>
                <div>{cartItems[item.id]}</div>
                <p>S/. {(item.price * cartItems[item.id]).toFixed(2)}</p>
                <p className='cart-items-remove-icon' onClick={() => removeFromCart(item.id)}>x</p>
                <hr />
            </div>
        );
    }
    return null;
})}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total precio</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery </p><p>{currency}{getTotalCartAmount()===0?0:deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>EMPEZAR A PAGAR</button>
        </div>
        <div className="cart-promocode">
    <div>
      <p>Si tienes un código promocional, ¡ingrésalo aquí!</p>
      <div className='cart-promocode-input'>
        <input type="text" placeholder='Código promocional' />
        <button>Enviar</button>
      </div>
    </div>
  </div>
</div>
      </div>



  );
}

export default Cart;
