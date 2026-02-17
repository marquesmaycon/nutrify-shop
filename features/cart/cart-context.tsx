"use client"

import { createContext, ReactNode, useContext, useState } from "react"

import {
  addToCart,
  type CartItem,
  clearCart,
  getCart,
  updateCartItem
} from "@/features/cart/actions"
import type { Product } from "@/features/products/products"

type CartContextType = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  add: (item: Product) => void
  update: (id: number, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getCart())

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function add(item: Product) {
    addToCart(item)
    setItems(getCart())
  }

  function update(id: number, quantity: number) {
    updateCartItem(id, quantity)
    setItems(getCart())
  }

  function clear() {
    clearCart()
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        add,
        update,
        clear
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
