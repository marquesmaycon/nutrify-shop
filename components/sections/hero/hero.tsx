import { ArrowDown, Award, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { format } from "path"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/features/products/products"
import { formatCurrency } from "@/lib/utils"

export function Hero() {
  const { title, description, price, image, off } = products.find((product) => product.featured)!
  const offPrice = off ? price - (price * off) / 100 : price
  return (
    <section
      id="home"
      className="relative h-[85vh] overflow-hidden bg-orange-100 py-18 md:h-[85vh] dark:bg-emerald-950"
    >
      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-between gap-8 px-6 py-12">
        <div className="space-y-6 text-center">
          <h3 className="font-sans text-lime-800 md:text-lg">
            Our best selling product <Award className="inline" />
          </h3>
          <h1 className="text-3xl font-bold text-lime-600 md:text-5xl lg:text-6xl">{title}</h1>
          <p className="text-muted-foreground mx-auto text-sm text-balance md:max-w-sm lg:text-base">
            {description}
          </p>
        </div>

        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="mx-auto h-64 w-auto rounded-xl object-contain md:h-80 lg:h-96 dark:brightness-75"
        />

        <Badge className="bg-emerald-600 text-base">{formatCurrency(offPrice)}</Badge>

        <div className="flex max-w-md gap-2">
          <Button className="flex-1" size="lg">
            Buy Now
            <ShoppingCart />
          </Button>
          <Button className="flex-1" size="lg" variant="secondary" asChild>
            <a href="#products">
              Other Products
              <ArrowDown />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
