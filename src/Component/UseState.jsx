import React from 'react'
import { useState } from 'react';
import './Style.css'

const UseState = () => {
    const[count,setCount] = useState(0);

    function updateCount(){
        setCount(count+2)
    }
  return (
    <div>
        <h3>Q-2 :- What is UseState Hook ?(Implementation)?</h3>
        <p className='color'>UseState hook :- </p>
        <ul>
          <li>The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.</li>
          <li>UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</li>
          </ul>
        <h5>Implementation</h5>
        <button onClick={updateCount}>Click Here : {count}</button>
    </div>
  )
}

export default UseState