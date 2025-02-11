import React, { useState } from 'react'
import { Header, Hero, Slider, Gauge, Footer } from './components'
import './App.css'

function App() {
  // Refers to which data set is loaded onto gauges
  const [ focus, setFocus ] = useState(0);

  // Attribute names for data set
  const dataPoints = [
    'Crispy',
    'Tender',
    'Juice',
    'Flavor',
    'P-N-R',
    'Wow'
  ]

  // Data structure (not the standard way of loading it)
  const data = [
    [3, 4, 4, 5, 2, 3], // Wendy's
    [3, 2, 2, 1, 5, 2], // Burger King
    [2, 5, 4, 5, 1, 5], // Chick-fil-A
    [4, 2, 1, 1, 4, 1] // McDonald's
  ]

  // Handles the click events from the cards
  const handleClick = (target) => {
    if(focus !== target) {
      setFocus(target);
    }
  }

  return (
    <>
      <Header />

      <div className='content'>
        <Hero />

        <div className='wrapper'>
          <Slider clickHandler={handleClick} />

          <div className='gaugeGroup'>
            <Gauge title={dataPoints[0]} value={data[focus][0]} />
            <Gauge title={dataPoints[1]} value={data[focus][1]} />
            <Gauge title={dataPoints[2]} value={data[focus][2]} />
            <Gauge title={dataPoints[3]} value={data[focus][3]} />
            <Gauge title={dataPoints[4]} value={data[focus][4]} />
            <Gauge title={dataPoints[5]} value={data[focus][5]} />
          </div>
        </div>
      </div> 

      <Footer />
    </>
  )
}

export default App
