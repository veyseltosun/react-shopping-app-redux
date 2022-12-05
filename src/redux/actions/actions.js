import { SELL_LAPTOP, SELL_COMP, SELL_WATCH, SELL_PHONE } from "../types/types";


export const sellLaptop = (number=1) =>{
    return  {

        type: SELL_LAPTOP,
        payload:number, 
    }

    
} ;
export const sellComp = () =>{
    return  {

        type: SELL_COMP,
    }

    ;
} ;
export const sellPhone = (number = 1) =>{
    return  {

        type: SELL_PHONE,
        payload: number, 
    }

    
} ;
export const sellWatch = () =>{
    return {

        type: SELL_WATCH,
    } 

    
} ;

    

    
        

    
