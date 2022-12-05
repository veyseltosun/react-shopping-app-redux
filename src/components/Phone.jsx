import React, {useState} from 'react'
import {useSelector, useDispatch,} from "react-redux";
import {sellPhone} from "../redux/actions/actions"

function Phone() {
  const [number, setNumber] = useState(1);
    const numberOfPhones = useSelector((state) => state.phone.numberOfPhones)
    const dispatch = useDispatch()
    console.log(numberOfPhones)
  return (
    <div className='container'>
        <h2>Redux ----Hooks----</h2>
        <h3>Number of phones: {numberOfPhones}</h3>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>dispatch(sellPhone(number))}>Sell Phones</button>
    </div>
  )
}

export default Phone