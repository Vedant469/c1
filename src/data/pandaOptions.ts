export type PandaOption = {
  id: 'panda-1' | 'panda-2' | 'panda-3' | 'panda-4'
  title: string
  note: string
  giftColorClass: string
}

export const pandaOptions: PandaOption[] = [
  {
    id: 'panda-1',
    title: 'Panda 1',
    note: 'A soft apology letter is waiting here.',
    giftColorClass: 'gift-pink',
  },
  {
    id: 'panda-2',
    title: 'Panda 2',
    note: 'A photo-only memory collage opens here.',
    giftColorClass: 'gift-rose',
  },
  {
    id: 'panda-3',
    title: 'Panda 3',
    note: 'A typewritten virtual hug is inside.',
    giftColorClass: 'gift-peach',
  },
  {
    id: 'panda-4',
    title: 'Panda 4',
    note: 'A sorry progress meter waits for you.',
    giftColorClass: 'gift-red',
  },
]