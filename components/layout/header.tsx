import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-3 z-30 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-black/15 bg-black/10 p-0.5 backdrop-blur-md">
        <Link href="/#home" className="nav-link">
          Home
        </Link>
        <Link href="/#products" className="nav-link">
          Products
        </Link>
        <Link href="/#testimonials" className="nav-link">
          Testimonials
        </Link>
        <a href="#cart" className="nav-link bg-white text-gray-900 hover:bg-white/70">
          Cart
        </a>
      </nav>
    </header>
  )
}
