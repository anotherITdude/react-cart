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
}

export interface StateInterface {
    products?: ProductInterface[];
    cart?: ProductInterface[];
   
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  }