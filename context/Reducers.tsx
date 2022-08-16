import { StateInterface, ActionInterface, ProductInterface } from "../models/product";

export const cartReducer = ( state: StateInterface, action: ActionInterface ) => {
    const { type, payload } = action;
    
    let index: number | undefined;
    let newShoppingCart: ProductInterface[];
    let newItem: ProductInterface;

    const getIndex = () => {
        return state.cart.findIndex(item => item.id === payload)
    }
    switch (type) {
        
        case('ADD_TO_CART'):
        return { 
            ...state,
            cart: [ ...state.cart, {...payload, qty:1} ]
        }

        case('REMOVE_FROM_CART'):
        
        return {
            ...state,
            cart: state.cart.filter((product) => product.id !== payload)
        }

        case ('CART_QUANTITY'):
            return{
                ...state,
                cart: state.cart.filter((product) => 
                product.id === payload.id ? (product.qty = parseInt(payload.qty)) : product.qty
                ),
            }

    
        default:
            return state;
    }
}