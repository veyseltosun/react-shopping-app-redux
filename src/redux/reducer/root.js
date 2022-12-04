import { combineReducers } from "redux";
import { createStore } from "redux";
import laptopReducer from "./LaptopReducer"


const rootReducer = combineReducers({
    laptop: laptopReducer,
})

const store = createStore(rootReducer);

export default store;