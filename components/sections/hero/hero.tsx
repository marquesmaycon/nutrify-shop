import { ArrowDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="flex min-h-[80vh] bg-orange-100 py-56 dark:bg-amber-900">
      <div className="flex flex-col justify-between">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl">The best product for your needs</h1>
          <p className="text-muted-foreground text-sm">
            This is out best product, you will love it!
          </p>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1" size="lg">
            Buy Now
            <ArrowRight />
          </Button>
          <Button className="flex-1" size="lg" variant="secondary">
            Other Products
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  )
}
