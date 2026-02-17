import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-amber-100 px-4 dark:bg-yellow-950">
      <div className="container mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h3 className="text-2xl md:text-3xl">Testimonials</h3>
          <p className="text-muted-foreground text-sm text-balance md:text-base">
            Hear from our satisfied customers who have experienced the transformative benefits of
            our
          </p>
        </div>

        <div className="-m-2 flex overflow-x-clip mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <ul className="animate-move-left animation-duration-[60s] hover:paused flex flex-none gap-8 pr-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <li key={index}>
                <Card className="h-full max-w-sm">
                  <CardContent>
                    <div className="mb-2 flex gap-1">
                      <Star className="fill-current text-yellow-400" />
                      {Array.from({ length: testimonial.stars - 1 }).map((_, i) => (
                        <Star key={i} className="fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p>{testimonial.quote}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <p className="text-muted-foreground font-serif">
                      {testimonial.name} - <Badge>{testimonial.title}</Badge>
                    </p>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Emma Collins",
    title: "Wellness Coach",
    quote: "I noticed steadier energy within a week, and my afternoon slump disappeared.",
    stars: 5
  },
  {
    name: "Marcus Reed",
    title: "Nutritionist",
    quote: "Clean ingredients, great taste, and clients actually stick with it.",
    stars: 4
  },
  {
    name: "Sophia Nguyen",
    title: "Yoga Instructor",
    quote: "My digestion feels calmer and I recover faster after long sessions.",
    stars: 5
  }
]
