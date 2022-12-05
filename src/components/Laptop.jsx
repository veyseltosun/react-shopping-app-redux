import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 

import {sellLaptop} from "../redux/actions/actions"

function Laptop() {
    const numberOfLaptops = useSelector((state) => state.numberOfLaptops);
    const dispatch = useDispatch();
    const [number, setNumber] = React.useState(1);
  
  return (
    <div className='container'>
        <h2>Laptops  --- Pure Redux ---</h2>
        <h3>Nuber of Laptops:{numberOfLaptops}
            
        </h3>
        <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => dispatch(sellLaptop(number))}>Sell Laptop</button>
    </div>
  )
}


export default Laptop;