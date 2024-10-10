import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Producto</p> <p>Precio</p> <p>Cantidad</p> <p>Total</p> <p>Quitar</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p>S/. {item.food_price}</p>
                <div>{cartItems[item.food_id]}</div>
                <p>S/. {item.food_price*cartItems[item.food_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.food_id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Mi Carrito de Compra</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>S/. {getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Tarifa de Envío</p><p>S/. {getTotalCartAmount()===0?0:5}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>S/. {getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b></div>
          </div>
          <button onClick={()=>navigate('/order')}>Ir a Pagar</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes un código promocional, Ingrésalo aquí!</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
