import React from 'react'
import './Card.css'

// Card structure for each type of nugget
export default function Card({ id, name, sample, clickHandler }) {
  return (
    <div className='card' onClick={() => clickHandler(id)}>
      <img className='cardSample' src={sample} alt='sample nugget'/>
      <div className='overlay'>
        <h3 className='cardTitle'>{name}</h3>
      </div>
    </div>
  )
}