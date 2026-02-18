export default function Loading() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-background/80 px-8 py-6 shadow-2xl">
          <div className="relative h-12 w-12">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
            <span className="relative block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Loading DesignX…
          </p>
        </div>
      </div>
    )
  }
  