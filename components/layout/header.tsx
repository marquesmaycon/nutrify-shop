export function Header() {
  return (
    <header className="fixed top-3 z-30 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-black/15 bg-black/10 p-0.5 backdrop-blur-md">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#products" className="nav-link">
          Products
        </a>
        <a href="#testimonials" className="nav-link">
          Testimonials
        </a>
        <a href="#cart" className="nav-link bg-white text-gray-900 hover:bg-white/70">
          Cart
        </a>
      </nav>
    </header>
  )
}
