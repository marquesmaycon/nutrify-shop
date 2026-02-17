import { ShoppingBag } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import type { Product } from "./products"

type ProductProps = Product

export function Product({ title, description, price, image, featured }: ProductProps) {
  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden pt-0">
      <Image
        src={image}
        alt={title}
        className="aspect-video w-full object-cover dark:brightness-75"
        width={400}
        height={300}
      />
      <CardHeader className="relative">
        <CardTitle className="flex items-center justify-between">
          {title} {featured && <Badge variant="secondary">Featured</Badge>}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-8">
        <span className="font-mono text-lg">$ {price.toFixed(2)}</span>
        <Button className="flex-1">
          Add to Cart <ShoppingBag />
        </Button>
      </CardFooter>
    </Card>
  )
}
