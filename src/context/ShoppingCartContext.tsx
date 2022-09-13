import { createContext, useContext, useState } from "react";
import {
  ShoppingCartContextProps,
  ShoppingCartProviderProps,
  CartItemProps
} from "../interfaces/ContextProps";

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
