import {ADD_ORDER} from './orderTypes';
import {SEE_ORDER} from './orderTypes';
import axios from "axios";
export const addOrder=(data)=>{
    return{
        type:ADD_ORDER,
        payload:data
    }
}

export const seeOrder=(data)=>{
    return{
        type:SEE_ORDER,
        payload:data
    }
}


export const addDATA=(data)=>async(dispatch)=>{
    const result=await axios.post("http://localhost:5000/adddata",data);
    console.log(">>>>>>>>>>>>>>>>>",result.data);
    dispatch(addOrder(result.data))
}

export const seeDATA=()=>async(dispatch)=>{

    const result=await axios.get("http://localhost:5000/getData");
    console.log(result.data);
    dispatch(seeOrder(result.data))
}

