import { TvMinimalPlay } from "lucide-react"

export function Video() {
  return (
    <section className="w-full bg-rose-200 py-18 dark:bg-indigo-950">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold text-balance md:text-3xl">
            Watch the video to see how it works
            <TvMinimalPlay className="ml-4 inline" />
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Get to know our product better
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-2xl"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/4Yqe2j2Iw-Q"
              title="Product demonstration video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              aria-label="Product demonstration video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
