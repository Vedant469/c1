export type PandaOption = {
  id: string
  title: string
  note: string
  giftColorClassName: string
}

export const pandaOptions: PandaOption[] = [
  {
    id: 'panda-1',
    title: 'Panda 1',
    note: 'A sweet surprise is waiting here.',
    giftColorClassName: 'bg-pink-300 dark:bg-pink-400',
  },
  {
    id: 'panda-2',
    title: 'Panda 2',
    note: 'This one is extra cuddly and cute.',
    giftColorClassName: 'bg-rose-300 dark:bg-rose-400',
  },
  {
    id: 'panda-3',
    title: 'Panda 3',
    note: 'Tiny panda, giant love energy.',
    giftColorClassName: 'bg-orange-200 dark:bg-orange-300',
  },
  {
    id: 'panda-4',
    title: 'Panda 4',
    note: 'One more little gift just for you.',
    giftColorClassName: 'bg-red-200 dark:bg-red-300',
  },
]