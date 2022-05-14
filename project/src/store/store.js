import { createStore, combineReducers } from "redux"

import ProductReducers from "./Product/Product.reducers"
const rootReducer = combineReducers({   
    product: ProductReducers,
})

const store = createStore(
    rootReducer    
);

export default store
