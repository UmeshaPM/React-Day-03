import React from 'react'
import './Style.css'

const Day3 = () => {
  return (
    <div>
        <h3>Q-01 :- Difference between Axios and fetch?</h3>
        <p className='color'>AXIOS :- </p>
            <ul className='items'>
                <li>Axios has url in request object.</li>
                <li>In Axios,the data is sent through data property.</li>
                <li>Axios enjoys built-in XSRF protection.</li>
                <li>Axios uses the data property.</li>
            </ul>
            <p className='color'>FETCH :- </p>
            <ul className='items'>
                <li>Fetch has no URL in request object.</li>
                <li>In fetch,the data is sent through body property.</li>
                <li>Fetch does not enjoys built-in XSRF protection.</li>
                <li>Fetch uses the body property.</li>
            </ul>
    </div>
  )
}

export default Day3