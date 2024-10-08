import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explora nuestra carta </h1>
      <p className='explore-menu-text'>Elija entre una carta variada que incluye una variedad de platos deliciosos. Nuestra misión es satisfacer sus antojos y mejorar su experiencia gastronómica, una comida deliciosa a la vez.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
