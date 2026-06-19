import { Heart } from 'lucide-react'

type HeartPhotoPlaceholderProps = {
  label: string
  src?: string
  alt?: string
}

const heartClipPath =
  'polygon(50% 100%, 0 58%, 0 24%, 18% 4%, 38% 10%, 50% 24%, 62% 10%, 82% 4%, 100% 24%, 100% 58%)'

export default function HeartPhotoPlaceholder({ label, src, alt }: HeartPhotoPlaceholderProps) {
  return (
    <div className="relative h-64 w-64">
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className="absolute inset-0 h-full w-full object-cover shadow-md"
          style={{ clipPath: heartClipPath }}
        />
      ) : (
        <>
          <div className="absolute left-5 top-4 h-28 w-28 rounded-full border border-pink-200 bg-white shadow-md dark:border-pink-900 dark:bg-card" />
          <div className="absolute right-5 top-4 h-28 w-28 rounded-full border border-pink-200 bg-white shadow-md dark:border-pink-900 dark:bg-card" />
          <div className="absolute bottom-5 left-1/2 h-40 w-40 -translate-x-1/2 rotate-45 rounded-[2rem] border border-pink-200 bg-white shadow-md dark:border-pink-900 dark:bg-card" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-10 text-center">
            <div className="rounded-full bg-pink-100 p-3 text-pink-500 dark:bg-pink-950/60 dark:text-pink-300">
              <Heart className="h-7 w-7 fill-current" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-500 dark:text-pink-300">
                Photo spot
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}