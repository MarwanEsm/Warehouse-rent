import { combineReducers } from "redux";
import OfferSlice from "./offerSlice";


const rootReducer = combineReducers({
    offer: OfferSlice
})

export default rootReducer