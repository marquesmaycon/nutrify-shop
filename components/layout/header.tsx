import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-3 z-30 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-black/15 bg-black/10 p-0.5 backdrop-blur-md">
        <div className="flex items-center justify-between px-2">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} className="size-6" />
        </div>
        <Link href="/#home" className="nav-link">
          Home
        </Link>
        <Link href="/#products" className="nav-link">
          Products
        </Link>
        <Link href="/#testimonials" className="nav-link hidden sm:inline-flex">
          Testimonials
        </Link>
        <Link href="/cart" className="nav-link bg-white text-gray-900 hover:bg-white/70">
          Cart
        </Link>
      </nav>
    </header>
  )
}
