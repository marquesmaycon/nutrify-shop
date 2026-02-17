const STORAGE_KEY = "utm_data"

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const

export function getUTM(): Record<string, string> | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function captureAndPersistUTM(searchParams: URLSearchParams) {
  if (typeof window === "undefined") return
  try {
    const existing = localStorage.getItem(STORAGE_KEY)

    if (existing) return

    const utm: Record<string, string> = {}

    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key)
      if (value) utm[key] = value
    })

    if (Object.keys(utm).length === 0) {
      utm.utm_source = document.referrer || "direct"
    }

    const data = {
      ...utm,
      first_touch_at: new Date().toISOString()
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}
