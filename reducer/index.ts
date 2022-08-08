import { StateInterface, ProductInterface, ActionInterface } from "../models/product";

export const initialState: StateInterface = {
    products:[]
}

export const reducerfunction = (state:StateInterface, action:ActionInterface) => {
    
    const { type, payload} = action;

    switch(type){
        case "ADD_PRODUCTS":
            return {
                ...initialState,
                products: payload as ProductInterface[]
            }
        default: return state
        
    }
}