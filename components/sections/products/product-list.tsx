import { ShoppingBag } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { products } from "./products"

export function ProductList() {
  return (
    <section id="products" className="bg-muted/50">
      <ul className="flex flex-col gap-8">
        {products.map((p) => (
          <li key={p.id}>
            <Card className="mx-auto w-full max-w-sm overflow-hidden pt-0">
              <Image
                src={p.image}
                alt={p.title}
                className="aspect-video w-full object-cover"
                width={400}
                height={300}
              />
              <CardHeader>
                <CardAction>{p.featured && <Badge variant="secondary">Featured</Badge>}</CardAction>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-8">
                <span className="font-mono text-lg">$ {p.price.toFixed(2)}</span>
                <Button className="flex-1">
                  Add to Cart <ShoppingBag />
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
