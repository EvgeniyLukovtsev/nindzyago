export interface CartItem {
  number: number;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  sizes: number[];
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
