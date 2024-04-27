import React, { useState } from 'react'
import data from '../data'

function Card({card,remove}) {
    const [flag,setFlag]=useState(true);
    function removeHandler(event){
       remove( card.id);
    }
  return (
    <div className='card'>
        <img src={card.image} className='image'></img>
        <div className='details'>
        <div className='info'>
            <h3 className='name'>{card.name}</h3>
            <h3 className='price'>{card.price}</h3>
        </div>
        <div className='desc'>
        <span>{flag ?card.info.substring(0,200)+'....':card.info}</span>
        <span className='show' onClick={()=>{setFlag(!flag)}}>{flag ?' Read more':' Show less'}</span>
        </div>
        </div>
       
        <button className='btn'onClick={removeHandler}>Not intersted</button>
    </div>
  )
}

export default Card
