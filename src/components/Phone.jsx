import React from 'react'
import {useSelector, useDispatch,} from "react-redux";

function Phone() {
    const numberOfPhones = useSelector((state) => state.phone.numberOfPhones)
    console.log(numberOfPhones)
  return (
    <div className='container'>
        <h2>Redux ----Hooks----</h2>
        <h3>Number of phones: {numberOfPhones}</h3>
    </div>
  )
}

export default Phone