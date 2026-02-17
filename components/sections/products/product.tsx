"use client"

import { ShoppingBag } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/features/cart/cart-context"
import type { Product } from "@/features/products/products"
import { formatCurrency } from "@/lib/utils"

type ProductProps = Product

export function Product(product: ProductProps) {
  const { title, description, price, image, featured } = product
  const { add } = useCart()
  const offPrice = product.off ? price - (price * product.off) / 100 : price
  return (
    <Card className="h-full overflow-hidden pt-0">
      <Image
        src={image}
        alt={title}
        className="aspect-video w-full object-cover dark:brightness-75"
        width={400}
        height={300}
      />
      <CardHeader className="relative">
        <CardTitle className="flex items-center justify-between font-serif">
          {title} {featured && <Badge variant="secondary">Featured</Badge>}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg lg:text-xl">{formatCurrency(offPrice)}</span>
          {product.off && <Badge className="bg-emerald-600">{product.off}% OFF</Badge>}
        </div>
        <ButtonGroup>
          <Button className="flex-1" variant="secondary" onClick={() => add(product)}>
            Add to Cart
          </Button>
          <Button className="flex-1" onClick={() => add(product)}>
            Buy <ShoppingBag />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
