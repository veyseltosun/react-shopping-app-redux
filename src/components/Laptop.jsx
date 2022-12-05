import React from 'react'
import {connect} from "react-redux";
import {sellLaptop} from "../redux/actions/actions"

function Laptop(props) {
    console.log("props");
    console.log("props.numberOfLaptops", props.numberOfLaptops);
  return (
    <div className='container'>
        <h2>Laptops  --- Pure Redux ---</h2>
        <h3>Nuber of Laptops:{props.numberOfLaptops}
            
        </h3>
        <button onClick={props.sellLaptop}>Sell Laptop</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        sellLaptop: () => dispatch(sellLaptop())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Laptop);