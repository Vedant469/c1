import { Heart } from 'lucide-react'

type PandaIllustrationProps = {
  className?: string
  mood?: 'happy' | 'sad'
}

export default function PandaIllustration({
  className,
  mood = 'happy',
}: PandaIllustrationProps) {
  const isSad = mood === 'sad'

  return (
    <div className={className}>
      <div className="relative mx-auto h-52 w-52">
        {!isSad ? (
          <>
            <Heart className="absolute left-1 top-8 h-5 w-5 fill-pink-300 text-pink-300 dark:fill-pink-400 dark:text-pink-400" />
            <Heart className="absolute right-3 top-5 h-4 w-4 fill-rose-300 text-rose-300 dark:fill-rose-400 dark:text-rose-400" />
            <Heart className="absolute right-7 top-14 h-3 w-3 fill-pink-200 text-pink-200 dark:fill-pink-300 dark:text-pink-300" />
            <Heart className="absolute left-5 top-16 h-3 w-3 fill-rose-200 text-rose-200 dark:fill-rose-300 dark:text-rose-300" />
          </>
        ) : null}

        <div className="absolute left-6 top-7 h-16 w-16 rounded-full bg-zinc-900" />
        <div className="absolute right-6 top-7 h-16 w-16 rounded-full bg-zinc-900" />

        <div
          className={
            isSad
              ? 'absolute inset-x-4 top-10 h-40 rotate-6 rounded-[45%] bg-white shadow-retool-md ring-1 ring-black/5 dark:bg-zinc-100'
              : 'absolute inset-x-4 top-10 h-40 rounded-[45%] bg-white shadow-retool-md ring-1 ring-black/5 dark:bg-zinc-100'
          }
        />

        <div className="absolute left-10 top-[4.25rem] h-14 w-14 rounded-full bg-zinc-900" />
        <div className="absolute right-10 top-[4.25rem] h-14 w-14 rounded-full bg-zinc-900" />
        <div className="absolute left-14 top-[5.25rem] h-6 w-6 rounded-full bg-white" />
        <div className="absolute right-14 top-[5.25rem] h-6 w-6 rounded-full bg-white" />

        <div
          className={
            isSad
              ? 'absolute left-12 top-20 flex h-9 w-9 items-start justify-center rounded-full bg-zinc-900 pt-1.5'
              : 'absolute left-12 top-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900'
          }
        >
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>
        <div
          className={
            isSad
              ? 'absolute right-12 top-20 flex h-9 w-9 items-start justify-center rounded-full bg-zinc-900 pt-1.5'
              : 'absolute right-12 top-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900'
          }
        >
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>

        <div className="absolute left-1/2 top-[5.6rem] h-8 w-10 -translate-x-1/2 rounded-[50%] bg-zinc-900" />
        <div className="absolute left-1/2 top-[6rem] h-6 w-7 -translate-x-1/2 rounded-full bg-stone-200" />
        <div className="absolute left-1/2 top-[6.25rem] h-2.5 w-3 -translate-x-1/2 rounded-full bg-zinc-900" />

        <div
          className={
            isSad
              ? 'absolute left-[6.2rem] top-[7.45rem] h-5 w-5 rounded-full border-t-2 border-zinc-900'
              : 'absolute left-[6.2rem] top-[7.05rem] h-5 w-5 rounded-full border-b-2 border-zinc-900'
          }
        />
        <div
          className={
            isSad
              ? 'absolute right-[6.2rem] top-[7.45rem] h-5 w-5 rounded-full border-t-2 border-zinc-900'
              : 'absolute right-[6.2rem] top-[7.05rem] h-5 w-5 rounded-full border-b-2 border-zinc-900'
          }
        />

        <div className="absolute bottom-6 left-1/2 h-16 w-24 -translate-x-1/2 rounded-[45%] bg-stone-200" />
        <div className="absolute bottom-3 left-8 h-10 w-12 rounded-full bg-white shadow-sm" />
        <div className="absolute bottom-3 right-8 h-10 w-12 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  )
}