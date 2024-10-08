import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const { getTotalCartAmount, placeOrder } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Informacion de entrega</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='Nombre' />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Apellido' />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Calle' />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='Ciudad' />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='Estado' />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Codigo postal' />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Pais' />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Telefono' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total del carrito</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Tarifa de entrega</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
                    </div>
                </div>
                <div className="payment-options">
                    <h2>Seleccionar Metodo de Pago</h2>
                    <div className="payment-option">
                        <img src={assets.selector_icon} alt="" />
                        <p>COD ( VISA )</p>
                    </div>
                    <button onClick={() => placeOrder(data)}>REALIZAR PEDIDO</button>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrder
