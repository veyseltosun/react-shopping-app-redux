import { bindActionCreators } from "redux";
import { SELL_LAPTOP } from "../types/types";
const initialState = {
    numberOfLaptop : 100,

}

const laptopReducer = () =>{
    switch(action.type){
        case SELL_LAPTOP:
            return{
                ...state,
                numberOfLaptop:state.numberOfLaptop - 1,

            }
            default:
                state


    }

}

export default laptopReducer;