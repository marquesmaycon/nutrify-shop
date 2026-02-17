"use client"

import type { Product } from "../products/products"

export type CartItem = Product & {
  quantity: number
}

const STORAGE_KEY = "cart_items"

export function getCart(): CartItem[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
}

export function addToCart(item: Product) {
  const current = getCart()
  const existing = current.find((i) => i.id === item.id)

  const updated = existing
    ? current.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    : [...current, { ...item, quantity: 1 }]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export function updateCartItem(id: number, quantity: number) {
  const current = getCart()

  if (quantity <= 0) {
    const filtered = current.filter((i) => i.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } else {
    const updated = current.map((i) => (i.id === id ? { ...i, quantity } : i))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }
}

export function clearCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
}
