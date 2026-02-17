export type Product = {
  id: number
  title: string
  description: string
  price: number
  image: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    title: "Herbal Immunity Essentials",
    description:
      "A daily botanical blend with vitamin C and zinc to support immune defense and year-round wellness.",
    price: 497.0,
    image: "/med-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Omega Balance Softgels",
    description:
      "Ultra-pure omega-3s from sustainable sources to promote heart, brain, and joint health.",
    price: 397.0,
    image: "/med-2.jpg"
  },
  {
    id: 3,
    title: "Probiotic Gut Harmony",
    description:
      "Clinically studied strains with prebiotic fiber to support digestion, microbiome balance, and comfort.",
    price: 2997.0,
    image: "/med-3.jpg"
  },
  {
    id: 4,
    title: "Plant Collagen Builder",
    description:
      "A vegan formula with silica, vitamin C, and amino acids to support skin elasticity and hair strength.",
    price: 97.0,
    image: "/med-4.jpg"
  },
  {
    id: 5,
    title: "Natural Energy + Focus",
    description:
      "Clean, caffeine-balanced adaptogens to sustain energy, clarity, and stress resilience without the crash.",
    price: 297.0,
    image: "/med-5.jpg"
  },
  {
    id: 6,
    title: "Liver Detox Support",
    description:
      "Milk thistle and antioxidant-rich botanicals to aid natural detox pathways and metabolic health.",
    price: 497.0,
    image: "/med-6.jpg"
  }
]
