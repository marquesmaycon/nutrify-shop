"use client"

import Link from "next/link"

import { useCart } from "@/features/cart/cart-context"

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Link href="/checkout" className="nav-link bg-white text-gray-900 hover:bg-white/70">
      Cart {totalItems > 0 && `(${totalItems})`}
    </Link>
  )
}
