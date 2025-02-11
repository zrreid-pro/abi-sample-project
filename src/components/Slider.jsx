import React from 'react'
import Card from './Card'
import './Slider.css'

// Container structure to display card components
export default function Slider({ clickHandler }) {

  // Sample data to display with card components. It would normally be accessed from a database or API
  const cardData = [
    {
      'name': 'Wendy\'s',
      'sample': 'src/assets/wendys.png'
    },
    {
      'name': 'Burger King',
      'sample': 'src/assets/bk.png'
    },
    {
      'name': 'Chick-fil-A',
      'sample': 'src/assets/chickfila.png'
    },
    {
      'name': 'McDonald\'s',
      'sample': 'src/assets/mcdees.png'
    }
  ]


  // Loops through the data to generate a dynamic number of card components
  return (
    <div className='slider'>
      {cardData.map((card, index) => (
        <Card key={index} id={index} name={card.name} sample={card.sample} clickHandler={clickHandler} />
      ))}
    </div>
  )
}
