import { StateInterface, ProductInterface, ActionInterface } from "../models/product";

export const initialState: StateInterface = {
    products:[],
    shoppingCart:[]
}

export const reducerfunction = (state:StateInterface, action:ActionInterface) => {
    
    const { type, payload } = action;

    switch(type){
        case "ADD_PRODUCTS":
            return {
                ...initialState,
                products: payload as ProductInterface[]
            }
        case "ADD_TO_CART":
            let newCart = state.shoppingCart
            newCart.push(payload as ProductInterface)
            return{
                ...state,
                shoppingcart: newCart
            }
        default: return state
        
    }
}