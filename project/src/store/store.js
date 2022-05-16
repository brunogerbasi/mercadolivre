import { createStore, combineReducers } from "redux"

import ProductReducers from "./Product/Product.reducers"
import ProductOverview from "./Overview/Overview.reducers"
const rootReducer = combineReducers({   
    product: ProductReducers,
    overview: ProductOverview
})

const store = createStore(
    rootReducer    
);

export default store
