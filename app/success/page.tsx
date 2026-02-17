"use client"

import Image from "next/image"
import { useMemo, useSyncExternalStore } from "react"

import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import type { CartItem } from "@/features/cart/actions"
import { getUTM } from "@/features/utm/actions"
import { formatCurrency } from "@/lib/utils"

export default function SuccessPage() {
  const rawLastPurchase = useSyncExternalStore(
    () => () => {},
    () => (typeof window !== "undefined" ? localStorage.getItem("last_purchase") : null),
    () => null
  )

  const items = useMemo(() => {
    if (!rawLastPurchase) return []
    try {
      return JSON.parse(rawLastPurchase) as CartItem[]
    } catch {
      return []
    }
  }, [rawLastPurchase])

  const rawUtm = useSyncExternalStore(
    () => () => {},
    () => (typeof window !== "undefined" ? localStorage.getItem("utm_data") : null),
    () => null
  )

  const utms = useMemo(() => {
    if (!rawUtm) return null
    return getUTM()
  }, [rawUtm])

  return (
    <section className="min-h-[80vh] bg-emerald-100 pt-40 dark:bg-emerald-950">
      <div className="container mx-auto space-y-12">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400">Success!</h1>
            <p>You just made a purchase. Check your email for the receipt and delivery details.</p>
          </div>

          <ul className="grid gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Item key={item.id} className="max-w-full bg-indigo-200 dark:bg-emerald-900">
                <ItemMedia>
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt="product img"
                    className="size-20 rounded-md object-cover"
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="font-sans">
                    {item.title} ({item.quantity}x) - {formatCurrency(item.price * item.quantity)}
                  </ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold text-emerald-800 dark:text-emerald-400">
            UTMs
          </h2>
          <ul className="space-y-2">
            {utms &&
              Object.entries(utms).map(([key, value]) => (
                <li key={key} className="">
                  {key}: {value}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
