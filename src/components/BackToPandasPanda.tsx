type BackToPandasPandaProps = {
  onClick: () => void
}

export default function BackToPandasPanda({ onClick }: BackToPandasPandaProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-4 right-4 z-20 flex items-end gap-3 rounded-full border border-pink-200/70 bg-white/92 px-3 py-2 shadow-[0_18px_40px_rgba(53,34,45,0.14)] ring-1 ring-white/60 backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:border-pink-900/60 dark:bg-card/92"
    >
      <span className="rounded-2xl bg-[linear-gradient(180deg,rgba(255,245,236,0.95),rgba(255,236,220,0.98))] px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-700 shadow-sm dark:bg-[linear-gradient(180deg,rgba(82,43,20,0.84),rgba(64,33,15,0.92))] dark:text-orange-200">
        Click me
      </span>
      <span className="relative block h-16 w-16 shrink-0">
        <span className="absolute left-1 top-0 h-5 w-5 rounded-full bg-zinc-900" />
        <span className="absolute right-1 top-0 h-5 w-5 rounded-full bg-zinc-900" />
        <span className="absolute inset-x-1 top-2 h-14 rounded-[45%] bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-100" />
        <span className="absolute left-3 top-5 h-4 w-4 rounded-full bg-zinc-900" />
        <span className="absolute right-3 top-5 h-4 w-4 rounded-full bg-zinc-900" />
        <span className="absolute left-[0.95rem] top-[1.45rem] h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute right-[0.95rem] top-[1.45rem] h-1.5 w-1.5 rounded-full bg-white" />
        <span className="absolute left-1/2 top-8 h-3 w-4 -translate-x-1/2 rounded-full bg-zinc-900" />
        <span className="absolute left-1/2 top-[2.2rem] h-2.5 w-3 -translate-x-1/2 rounded-full bg-stone-200" />
        <span className="absolute left-[1.3rem] top-[2.55rem] h-2.5 w-2.5 rounded-full border-b-2 border-zinc-900" />
        <span className="absolute right-[1.3rem] top-[2.55rem] h-2.5 w-2.5 rounded-full border-b-2 border-zinc-900" />
      </span>
    </button>
  )
}