import { ChevronRight } from "lucide-react"
import Link from "next/link"

import { ThemeSwitcher } from "../theme-switcher"
import { Button } from "../ui/button"

export function Footer() {
  return (
    <footer className="bg-background px-4 pt-24 pb-12">
      <div className="flex items-center justify-between">
        <div className="space-x-6">
          <h6 className="mb-4">© 2026 VSL. All rights reserved.</h6>
          <Button asChild variant="link" size="sm" className="px-0!">
            <Link href="/privacy" className="text-muted-foreground text-sm">
              <ChevronRight /> Privacy Policy
            </Link>
          </Button>
          <Button asChild variant="link" size="sm" className="px-0!">
            <Link href="/terms" className="text-muted-foreground text-sm hover:underline">
              <ChevronRight /> Terms of Service
            </Link>
          </Button>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
