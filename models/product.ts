export interface ProductInterface {
    id: string;
    name: string;
    price: number;
    image: string;
    ratings: number;
    category: string;
    description: string;
    fastDelivery: boolean;
    inStock: number
    qty: number;
}

export interface StateInterface {
    products?: ProductInterface[];
    cart?: ProductInterface[];
    byStock?: boolean
    byFastDelivery?: boolean
   
}

export interface ActionInterface{
    type: string;
    payload: any;
  }