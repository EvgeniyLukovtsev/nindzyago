import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price + sum, 0);
};
