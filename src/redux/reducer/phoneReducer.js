import { SELL_PHONE, SELL_LAPTOP } from "../types/types";

const initialState = {
    numberOfPhones :300,
    numberOfLaptops: 100,
};


const phoneReducer = (state = initialState, action) => {
    switch(action.type){
        case SELL_PHONE: 
            return{

                ...state,
                numberOfPhones : state.numberOfPhones - action.payload,
                

            }
        case SELL_LAPTOP:
            return {
                ...state,
                numberOfLaptops : state.numberOfLaptops - action.payload,

        }
            default:
                return state;
        

    }
};

export default phoneReducer;


