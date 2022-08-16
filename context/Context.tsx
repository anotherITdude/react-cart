import React, { createContext, useContext, useReducer } from 'react'
import { ProductInterface, StateInterface } from '../models/product';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers'; 



//const Cart = createContext<StateInterface | null>(null); 
const Cart = createContext(null); 

const Context = ({ children }) => {
  faker.seed(100);
  const products: ProductInterface[] = [...Array(30)].map( () => ({
    id: faker.datatype.uuid(), 
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(100, 500, 3)),
    image: faker.image.image(),
    ratings: faker.helpers.arrayElement([1,2,3,4,5]),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    fastDelivery: faker.datatype.boolean(),
    inStock: faker.helpers.arrayElement([0,3,5,6,10]),
  }))

  const [ state, dispatch] = useReducer( cartReducer, {
    products: products,
    cart:[],
  }); 

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const  CartState = () => {
  return useContext(Cart);
}
