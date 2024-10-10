import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>INICIO</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>CARTA</a>
        <a href='#app-download' onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>CENTRAL APP</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>CONTÁCTANOS</a>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.search_icon} alt="" class="basket-icon"/>
        </Link>
        {/* <img src={assets.search_icon} alt="" /> */}
        <Link to='/cart' className='navbar-basket-icon'>
          <img src={assets.basket_icon} alt="" class="basket-icon"/>
          <div className={getTotalCartAmount()>0?"dot":""}></div>
        </Link>
        <button onClick={()=>setShowLogin(true)}>Ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
