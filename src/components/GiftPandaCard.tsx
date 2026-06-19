import { Gift } from 'lucide-react'

import { Card, CardContent } from '../lib/shadcn/card'
import { cn } from '../lib/shadcn/utils'

type GiftPandaCardProps = {
  title: string
  note: string
  giftColorClassName: string
  onClick: () => void
}

export default function GiftPandaCard({
  title,
  note,
  giftColorClassName,
  onClick,
}: GiftPandaCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Card className="h-full rounded-[1.9rem] border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,246,249,0.96))] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_28px_54px_rgba(255,145,180,0.24)] dark:bg-[linear-gradient(180deg,rgba(42,28,34,0.96),rgba(31,21,26,0.98))]">
        <CardContent className="relative flex h-full flex-col items-center gap-4 overflow-hidden p-5 text-center sm:p-6">
          <div className="absolute inset-x-6 top-0 h-16 rounded-b-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,214,230,0.65),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.14),rgba(255,255,255,0))]" />

          <div className="relative h-40 w-32 transition-transform duration-300 group-hover:scale-[1.03]">
            <div className="absolute left-3 top-5 h-12 w-12 rounded-full bg-zinc-900" />
            <div className="absolute right-3 top-5 h-12 w-12 rounded-full bg-zinc-900" />

            <div className="absolute inset-x-1 top-10 h-28 rounded-[40%] bg-white shadow-retool-sm ring-1 ring-black/5 dark:bg-zinc-100" />

            <div className="absolute left-5 top-12 h-11 w-11 rounded-full bg-zinc-900" />
            <div className="absolute right-5 top-12 h-11 w-11 rounded-full bg-zinc-900" />

            <div className="absolute left-8 top-[3.75rem] h-5 w-5 rounded-full bg-white" />
            <div className="absolute right-8 top-[3.75rem] h-5 w-5 rounded-full bg-white" />

            <div className="absolute left-7 top-[3.5rem] flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900">
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <div className="absolute right-7 top-[3.5rem] flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900">
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>

            <div className="absolute left-1/2 top-[4.45rem] h-6 w-7 -translate-x-1/2 rounded-[50%] bg-zinc-900" />
            <div className="absolute left-1/2 top-[4.72rem] h-4 w-5 -translate-x-1/2 rounded-full bg-stone-200" />
            <div className="absolute left-1/2 top-[4.88rem] h-2 w-2.5 -translate-x-1/2 rounded-full bg-zinc-900" />
            <div className="absolute left-[2.9rem] top-[5.58rem] h-4 w-4 rounded-full border-b-2 border-zinc-900" />
            <div className="absolute right-[2.9rem] top-[5.58rem] h-4 w-4 rounded-full border-b-2 border-zinc-900" />

            <div className="absolute bottom-7 left-1/2 h-12 w-16 -translate-x-1/2 rounded-[42%] bg-stone-200" />
            <div className="absolute bottom-4 left-4 h-8 w-9 rounded-full bg-white shadow-sm" />
            <div className="absolute bottom-4 right-4 h-8 w-9 rounded-full bg-white shadow-sm" />

            <div
              className={cn(
                'absolute left-1/2 top-[4.8rem] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-xl border border-white/60 shadow-[0_10px_22px_rgba(0,0,0,0.14)]',
                giftColorClassName
              )}
            >
              <Gift className="h-6 w-6 text-white/95 drop-shadow-sm dark:text-zinc-900" />
            </div>
            <div className="absolute left-1/2 top-[4.8rem] h-14 w-2 -translate-x-1/2 rounded-full bg-white/85" />
            <div className="absolute left-1/2 top-[5.4rem] h-2 w-14 -translate-x-1/2 rounded-full bg-white/85" />
          </div>

          <div className="space-y-1">
            <h2 className="text-lg font-black tracking-[0.08em] text-foreground">
              {title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">{note}</p>
          </div>
        </CardContent>
      </Card>
    </button>
  )
}