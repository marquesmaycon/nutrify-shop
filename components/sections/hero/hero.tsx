import { ArrowDown, Award, ShoppingCart } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/features/products/products"
import { formatCurrency } from "@/lib/utils"

export function Hero() {
  const { title, description, price, image, off } = products.find((product) => product.featured)!
  const offPrice = off ? price - (price * off) / 100 : price
  return (
    <section id="home" className="relative h-[85vh] bg-orange-100 md:h-[90vh] dark:bg-emerald-950">
      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-evenly gap-6 px-6">
        <h3 className="font-serif font-bold text-orange-800 md:text-lg">NUTRIFY</h3>
        <div className="space-y-4 text-center">
          <h3 className="font-sans text-lime-800">
            Our best selling product <Award className="inline" />
          </h3>
          <h1 className="text-3xl font-bold text-lime-600 md:text-5xl lg:text-6xl">{title}</h1>
          <p className="text-muted-foreground mx-auto text-sm text-balance md:max-w-sm lg:text-base">
            {description}
          </p>
        </div>

        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="mx-auto h-64 w-auto rounded-xl object-contain md:h-80 lg:h-92 dark:brightness-75"
            loading="eager"
          />

          <Badge className="absolute top-4 right-4 bg-emerald-600 text-base">
            {formatCurrency(offPrice)}
          </Badge>
        </div>

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
      <div className="absolute -bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ArrowDown className="animation-duration-[2s] size-12 animate-bounce text-lime-600" />
      </div>
    </section>
  )
}
