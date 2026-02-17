import { Product } from "./product"
import { products } from "./products"

export function ProductList() {
  return (
    <section id="products" className="bg-muted">
      <div className="text-center">
        <h3 className="mb-2 text-3xl">Products</h3>
        <p className="text-muted-foreground">
          Discover our range of high-quality products designed to enhance your wellness journey.
        </p>
      </div>
      <ul className="mt-12 flex flex-col gap-8">
        {products.map((p) => (
          <li key={p.id}>
            <Product {...p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
