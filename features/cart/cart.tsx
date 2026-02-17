"use client"

import { ArrowUpRightIcon, Handbag, MinusIcon, PlusIcon, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from "@/components/ui/item"
import { formatCurrency } from "@/lib/utils"

import { useCart } from "./cart-context"

export function Cart() {
  const { items, totalPrice, update, clear } = useCart()
  const hasItems = items.length > 0

  return (
    <section>
      <div className="container mx-auto pt-10">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl">Your Cart</h1>

        {hasItems && (
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground text-center text-sm md:text-base">
              Check your cart items below:
            </p>

            <div className="space-y-4">
              {items.map((item) => (
                <Item key={item.id} className="max-w-full bg-rose-200 dark:bg-rose-800/75">
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
                      {item.title} ({item.quantity}x)
                    </ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                  <ItemActions className="flex-col">
                    <span className="font-mono font-medium">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                    <ButtonGroup aria-label="Item quantity controls" className="h-fit">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() => update(item.id, item.quantity - 1)}
                      >
                        <MinusIcon />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() => update(item.id, item.quantity + 1)}
                      >
                        <PlusIcon />
                      </Button>
                    </ButtonGroup>
                  </ItemActions>
                </Item>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <Button variant="secondary" size="sm" onClick={() => clear()}>
                Clear Cart
              </Button>

              <Badge variant="outline" className="px-3 py-1 font-mono text-sm uppercase">
                Total: <span className="ml-1 font-medium">{formatCurrency(totalPrice)}</span>
              </Badge>
            </div>

            <div className="flex flex-col gap-2">
              <Button className="transition-opacity" variant="secondary" disabled={!hasItems}>
                See more products
              </Button>
              <Button className="transition-opacity" disabled={!hasItems}>
                Checkout <ShoppingBag />
              </Button>
            </div>
          </div>
        )}

        {!hasItems && (
          <Empty className="mt-32">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Handbag />
              </EmptyMedia>
              <EmptyTitle>You have an empty cart</EmptyTitle>
              <EmptyDescription>
                Looks like you haven&apos;t added any products to your cart yet. Browse our
                selection and find something you like!
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="ghost" asChild>
                <Link href="/#products">
                  Start Shopping
                  <ArrowUpRightIcon />
                </Link>
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </section>
  )
}
