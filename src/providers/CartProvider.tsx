import { CartItem, Product } from "../types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // if already in cart, increment quantity
    // checks for existing items in cart, if product and size match >
    const existingItem = items.find(
      (item) => item.product == product && item.size == size
    );

    // call update quantity to simple increment by 1 instead of a duplicate item
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    console.log(product);

    const newCartItem: CartItem = {
      id: randomUUID(), // generate
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id != itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        //filter out the product if its quantity hits 0, removes negative value items
        .filter((item) => item.quantity > 0)
    );
    console.log(itemId, amount);
  };

  console.log(items);

  //  reduce collects all the items ((value to accumulate, current item) add to the sum, and multiply by quantity), starting value
  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
