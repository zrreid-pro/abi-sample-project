import React, { useState, useEffect } from 'react'
import './Gauge.css'

// Gauge structure to display input data
export default function Gauge({ title, value }) {
  const [ degree, setDegree ] = useState(0);
  const [ fill, setFill ] = useState('');

  // Updates data whenever a new value is provided
  useEffect(() => {
    calculateFill(value*20);
    setDegree(value);
  }, [value]);

  // Calculates the degree for the gradient fill
  const calculateFill = (value) => {
    let degree = 0;
    let targetDegree = value;
    degree += 1;
    if(degree != targetDegree) {
      setFill(`conic-gradient(#FFA500 ${targetDegree}%, #222 0%`);
    }
  };

  return (
    <div className='gauge' style={{ background: fill, transitionDuration: 0.5, transitionProperty: 'background' }}>
      <h4 className='label'>{title}</h4>
      <h4 className='number'>{degree}/5</h4>
    </div>
  )
}
