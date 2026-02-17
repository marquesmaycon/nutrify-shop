import { Suspense } from "react"

import { Hero } from "@/components/sections/hero/hero"
import { ProductList } from "@/components/sections/products/product-list"
import { Testimonials } from "@/components/sections/testimonials/testimonials"
import { Video } from "@/components/sections/video/video"

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Video />
      <ProductList />
      <Testimonials />
    </>
  )
}
