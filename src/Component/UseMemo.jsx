import React from 'react'
import { useState,useMemo } from 'react';
import './Style.css'

const UseMemo = () => {
    const[counter1,setCount1] = useState(0);
    const[counter2,setCount2] = useState(0);

    const setIncrement1 = () => {
        setCount1(counter1+1)
    }

    const setIncrement2 = () => {
        setCount2(counter2+1)
    }

    const IsEven = useMemo(() => {
        let i = 0
        while(i<1000)
        i++
        return counter1 % 2 === 0
    },[counter1])
  return (
    <div>
        <h3>Q-5 :- What is UseMemo Hook ?(Implementation)?</h3>
        <ul>
            <li>The React useMemo Hook returns a memoized value.</li>
            <li>The useMemo Hook only runs when one of its dependencies update.</li>
            <li>This can improve performance.</li>
        </ul>
        <h5>Implementation</h5>
        <div>
            <button onClick={setIncrement1}>Count1:{counter1}</button>
            <span>{IsEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={setIncrement2}>Count2:{counter2}</button>
        </div>
    </div>
  )
}

export default UseMemo;