import React from 'react'
import {connect} from "react-redux";

function Laptop(props) {
  return (
    <div>
        <h2>Laptops  --- Pure Redux ---</h2>
        <h3>Nuber of Laptops:{props.numberOfLaptops}
            
        </h3>
    </div>
  )
}
const mapStateToProps = (state) =>{
    return {
        numberOfLaptops:state.laptop.numberOflaptops
    }
}

export default connect(mapStateToProps)(Laptop);