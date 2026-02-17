import { products } from "@/features/products/products"

import { Product } from "./product"

export function ProductList() {
  return (
    <section id="products" className="bg-muted">
      <div className="container mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h3 className="text-3xl md:text-4xl">Products</h3>
          <p className="text-muted-foreground text-sm text-balance md:text-base">
            Discover our range of high-quality products designed to enhance your wellness journey.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.id}>
              <Product {...p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
