import React from 'react'
import { useState,useEffect } from 'react';
import './Style.css'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(5);
    

    function updateCount(){
        setCount(count+1)
    }

    function updateCount1(){
        setCount1(count1-1)
    }
    useEffect(() => {
        console.warn("useEffect called");
    },[count])
  return (
    <div>
        <h3>Q-3 :- What is useEffect Hook ?(Implementation)?</h3>
        <p className='color'> UseEffect :- </p>
        <ul>
            <li>The useEffect Hook allows you to perform side effects in your components.</li>
            <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
            <li>useEffect accepts two arguments. The second argument is optional.</li>
            <li>useEffect(function, dependency)</li>
        </ul>
        <h5>Implemenation</h5> 
        <h1>IncrementCount : {count}</h1>
        <button onClick={updateCount}>Increment</button><br></br>
        <h1>DecrementCount : {count1}</h1>
        <button onClick={updateCount1}>Decrement</button>
    </div>
  )
}

export default UseEffect