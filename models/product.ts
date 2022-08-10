export interface ProductInterface {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number,
        count: number
    };
    category: string;
    description: string;
}

export interface StateInterface {
    products: ProductInterface[];
    shoppingCart: ProductInterface[];
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  }