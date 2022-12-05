import { combineReducers } from "redux";
import { createStore } from "redux";
import laptopReducer from "./LaptopReducer"
import phoneReducer from "./phoneReducer";


const rootReducer = combineReducers({
    laptop: laptopReducer,
    phone : phoneReducer,
})

const store = createStore(rootReducer);

export default store;