export function Video() {
  return (
    <section className="w-full bg-orange-300 py-18 dark:bg-red-900">
      <div className="mb-8 space-y-4 text-center">
        <h2 className="text-3xl font-bold text-balance">Watch the video to see how it works</h2>
        <p className="text-muted-foreground">Get to know our product better</p>
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
    </section>
  )
}
