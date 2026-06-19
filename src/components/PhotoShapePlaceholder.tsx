import { Image as ImageIcon } from 'lucide-react'

type PhotoShapePlaceholderProps = {
  label: string
  variant?: 'circle' | 'heart' | 'rounded'
  className?: string
  src?: string
  alt?: string
}

const heartClipPath =
  'polygon(50% 100%, 0 58%, 0 24%, 18% 4%, 38% 10%, 50% 24%, 62% 10%, 82% 4%, 100% 24%, 100% 58%)'

export default function PhotoShapePlaceholder({
  label,
  variant = 'circle',
  className = '',
  src,
  alt,
}: PhotoShapePlaceholderProps) {
  const fallbackContent = (
    <div>
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-500 dark:bg-pink-950/60 dark:text-pink-300">
        <ImageIcon className="h-4 w-4" />
      </div>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-500 dark:text-pink-300">
        Photo
      </p>
      <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{label}</p>
    </div>
  )

  if (variant === 'heart') {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={src ? { clipPath: heartClipPath } : undefined}
      >
        {src ? (
          <img src={src} alt={alt ?? label} className="h-full w-full object-cover shadow-md" />
        ) : (
          <>
            <div className="absolute left-[10%] top-[8%] h-[36%] w-[36%] rounded-full bg-white/95 shadow-md ring-1 ring-pink-200 dark:bg-card dark:ring-pink-900/60" />
            <div className="absolute right-[10%] top-[8%] h-[36%] w-[36%] rounded-full bg-white/95 shadow-md ring-1 ring-pink-200 dark:bg-card dark:ring-pink-900/60" />
            <div className="absolute bottom-[12%] left-1/2 h-[52%] w-[52%] -translate-x-1/2 rotate-45 rounded-[1.4rem] bg-white/95 shadow-md ring-1 ring-pink-200 dark:bg-card dark:ring-pink-900/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <div className="rounded-full bg-pink-100 p-2 text-pink-500 dark:bg-pink-950/60 dark:text-pink-300">
                <ImageIcon className="h-4 w-4" />
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-500 dark:text-pink-300">
                Photo
              </p>
              <p className="mt-1 max-w-[7rem] text-[11px] leading-4 text-muted-foreground">
                {label}
              </p>
            </div>
          </>
        )}
      </div>
    )
  }

  if (variant === 'rounded') {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[2rem] bg-white/95 p-4 text-center shadow-md ring-1 ring-pink-200 dark:bg-card dark:ring-pink-900/60 ${className}`}
      >
        {src ? (
          <img src={src} alt={alt ?? label} className="h-full w-full object-cover" />
        ) : (
          fallbackContent
        )}
      </div>
    )
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full bg-white/95 p-4 text-center shadow-md ring-1 ring-pink-200 dark:bg-card dark:ring-pink-900/60 ${className}`}
    >
      {src ? (
        <img src={src} alt={alt ?? label} className="h-full w-full object-cover" />
      ) : (
        fallbackContent
      )}
    </div>
  )
}