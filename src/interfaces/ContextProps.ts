import { ReactNode } from "react";

export interface ShoppingCartContextProps {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItemProps[];
  cartQuantity: number;
}

export interface ShoppingCartProviderProps {
  children: ReactNode;
}

export interface CartItemProps {
  id: number;
  quantity: number;
}
