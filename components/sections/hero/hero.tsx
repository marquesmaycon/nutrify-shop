import { ArrowDown, Award, ShoppingCart } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { products } from "@/features/products/products"

export function Hero() {
  const featured = products.find((product) => product.featured)!

  return (
    <section
      id="home"
      className="relative h-[80vh] overflow-hidden bg-orange-100 py-18 md:h-[85vh] dark:bg-lime-950"
    >
      {/* <div className="absolute inset-0 w-full">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color=""
        />
      </div> */}

      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-between gap-8 px-6 py-12">
        <div className="space-y-6 text-center">
          <h3 className="font-sans text-lime-800/80 md:text-lg">
            Our best selling product <Award className="inline" />
          </h3>
          <h1 className="text-3xl text-lime-600 text-shadow-2xs md:text-5xl lg:text-6xl">
            {featured?.title}
          </h1>
          <p className="text-muted-foreground mx-auto text-sm text-balance md:max-w-sm lg:text-base">
            {featured?.description}
          </p>
        </div>

        <Image
          src={featured.image}
          alt={featured.title}
          width={500}
          height={500}
          className="mx-auto h-64 w-auto rounded-xl object-contain md:h-80 lg:h-96 dark:brightness-75"
        />

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
