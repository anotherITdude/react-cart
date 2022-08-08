export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
        rate: number,
        count: number
    };
    category: string;
}

export interface StateInterface {
    products: ProductInterface[];
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  }