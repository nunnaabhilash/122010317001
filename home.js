import React from 'react'
// import Image from './images/1.jpg'
import {Button} from "react-bootstrap"
import "./home.css"
export default function home() {
  return (
    <>

      <div className='contain'>
        <nav className='navbar'>
          <ul>
           <h3>Resever Ticket</h3>
            <li><a href="./home">Home</a></li>
            <li><a href="/">About</a></li>
            <li><input type="search" name="" value="" /></li>
            {/* <li><button type="search">search</button></li> */}
            <Button>Search</Button>
          </ul>


        </nav>


        <div className='card'>
          <div className='input-group'>
            
          <input type="text" name="" value="" placeholder='From' />
          <input type="text" name="" value="" placeholder='destination' />
          <input type="date" name="" value="" />
          <button type="search">search</button>
          </div>
        </div>



      

      </div>

    </>
  )
}
