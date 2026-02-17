"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { captureAndPersistUTM } from "./actions"

export function useUTM() {
  const searchParams = useSearchParams()

  useEffect(() => {
    captureAndPersistUTM(searchParams)
  }, [searchParams])
}
