import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    });

    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext); // Corregido aquí

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();
        console.log(cartItems); // Muestra los items del carrito

        let orderItems = [];

        // Itera sobre cada item en cartItems
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
                const item = food_list.find(foodItem => foodItem.id === parseInt(itemId));
                if (item) {
                    const itemInfo = { ...item, quantity };
                    orderItems.push(itemInfo);
                }
            }
        }

        let orderData = {
            address: data, // Asegúrate de que data esté definido
            items: orderItems,
            amount: getTotalCartAmount() + 2,
        };

        try {
            let response = await axios.post(url + "/api/order/place", orderData, {
                headers: { Authorization: `Bearer ${token}` } // Usa 'token' en singular
            });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                alert("Error al procesar la orden");
            }
        } catch (error) {
            console.error("Error al hacer la solicitud", error);
            alert("Hubo un problema al procesar tu pedido");
        }
    };




    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className='place-order'>
                <div className="place-order-left">
                    <p className='title'>Información de entrega</p>
                    <div className="multi-field">
                        <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='Nombre' required />
                        <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Apellido' required />
                    </div>
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' required />
                    <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Calle' required />
                    <div className="multi-field">
                        <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='Ciudad' required />
                        <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='Estado' required />
                    </div>
                    <div className="multi-field">
                        <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Código postal' required />
                        <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='País' required />
                    </div>
                    <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Teléfono' required />
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
                        <button type='submit'>REALIZAR PEDIDO</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
