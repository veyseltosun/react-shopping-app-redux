import React from 'react'
import {connect} from "react-redux";

function Laptop({numberOfLaptops}) {
    console.log("props");
    console.log("props.numberOfLaptops", numberOfLaptops);
  return (
    <div>
        <h2>Laptops  --- Pure Redux ---</h2>
        <h3>Nuber of Laptops:{numberOfLaptops}
            
        </h3>
    </div>
  )
}
const mapStateToProps = (state) =>{
    console.log("state:", state)
    console.log(connect)
    return {
        numberOfLaptops:state.laptop.numberOflaptops
    }
}

export default connect(mapStateToProps)(Laptop);