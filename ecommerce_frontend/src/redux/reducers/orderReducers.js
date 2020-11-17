import { ADD_ORDER } from "../actions/orderTypes";
import { SEE_ORDER } from "../actions/orderTypes";
const initialState={
    orders:[]
}

const orderReducers=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ORDER: return{
            ...state,
            orders:[action.payload,...state.orders]
        };
        case SEE_ORDER: return{
            ...state,
            orders:action.payload
        };
        default:
            return state;
    }
};

export default orderReducers;