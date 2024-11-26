import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Los mejores platos cerca tuyo!</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item.id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item.id}/>
          }
        })}
      </div>
      <hr />
    </div>
  )
}

export default FoodDisplay
