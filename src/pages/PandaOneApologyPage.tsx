import { Heart, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackToPandasPanda from '../components/BackToPandasPanda'
import FloatingHeartToggle from '../components/FloatingHeartToggle'
import HeartPhotoPlaceholder from '../components/HeartPhotoPlaceholder'
import LiquidHeartBackground from '../components/LiquidHeartBackground'
import PandaIllustration from '../components/PandaIllustration'

const apologyMessage = `My Dear Sanu ❤️🥺,

I know I have hurt you, and I know that somewhere along the way I made mistakes that broke your trust and made you feel disappointed 😔💔. Every day I think about it, and the truth is, I hate knowing that I am the reason for your pain 😞.

When you said we should take a break until our careers are settled, I tried to understand your point of view 🥺. I know our future is important 🌸✨, and I know we both have dreams to achieve 🎯💫. But the thought of being away from you hurts more than I can explain 💔😭.

You are not just my girlfriend, Sanu ❤️. You are the person who made my ordinary days feel special 🌹, the person whose messages made me smile 😊💕, and the person I imagined in every part of my future 🫶✨. The idea of waking up without you in my life feels empty 😔.

I am not perfect 😞, and I am not asking you to ignore my mistakes 🙏. I am only asking you to look at my love for you ❤️. It has never been fake 🤍, and it has never changed 🥺. Even after every argument, every misunderstanding, and every mistake, my heart still chooses you 💘.

I don't want a future where we become strangers 😭💔. I want a future where we look back at this difficult phase and say, “We survived it together” 🤝❤️. I want to work hard for my career 💼✨, make you proud 🥹🌹, and still hold your hand through every challenge 🫂❤️. I don't want success if it comes at the cost of losing you 😔💔.

Maybe I don't deserve another chance right now 😞, but if there is even a small place for me in your heart ❤️🥺, please don't let us go 🙏💔. Stay with me 🤍. Let me fix what I broke 🥹. Let me prove that my love is stronger than my mistakes ❤️‍🩹✨.

Because the truth is simple, Sanu... ❤️

I can imagine building a career 💼✨.
I can imagine achieving my goals 🎯🌟.
But I cannot imagine a life where you are not a part of it 😭❤️.

I am deeply sorry for everything 🙏💔.
And no matter how angry you are 😔, no matter how far you go 🥺, my heart will always choose you ❤️💍.

I love you, Sanu ❤️🥹🌹. More than I can ever put into words ❤️✨🫶.`

const apologyParagraphs = apologyMessage.split('\n\n')

export default function PandaOneApologyPage() {
  const navigate = useNavigate()
  const [showLetter, setShowLetter] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,245,247,1)_42%,_rgba(255,233,239,1)_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_top,_rgba(47,31,38,1),_rgba(33,21,26,1)_42%,_rgba(24,16,20,1)_100%)] sm:px-6 sm:py-8">
      <LiquidHeartBackground />
      <FloatingHeartToggle
        active={showLetter}
        onClick={() => setShowLetter((current) => !current)}
        activeLabel="Close"
        inactiveLabel="Open"
        activeAriaLabel="Hide apology letter"
        inactiveAriaLabel="Show apology letter"
      />

      <section className="relative z-10 mx-auto max-w-6xl rounded-[2.75rem] border border-pink-200/70 bg-white/78 p-4 shadow-[0_30px_90px_rgba(255,145,180,0.2)] backdrop-blur-xl dark:border-pink-900/40 dark:bg-card/78 dark:shadow-[0_30px_90px_rgba(0,0,0,0.36)] sm:p-6 lg:p-8">
        {!showLetter ? (
          <div className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden rounded-[2.35rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,246,249,0.98))] px-6 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-pink-900/40 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:px-8 sm:py-12">
            <Sparkles className="absolute left-8 top-8 h-6 w-6 text-pink-300 dark:text-pink-400" />
            <Star className="absolute right-12 top-10 h-5 w-5 fill-amber-300 text-amber-300 dark:fill-amber-400 dark:text-amber-400" />
            <Heart className="absolute left-10 bottom-14 h-5 w-5 fill-pink-300 text-pink-300 dark:fill-pink-400 dark:text-pink-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-pink-500 dark:text-pink-300">
              Panda 1
            </p>
            <h1 className="mt-4 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,141,91,1))] bg-clip-text text-4xl font-black uppercase tracking-[0.16em] text-transparent sm:text-5xl">
              I am sorry
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              I made this little panda page to say what is in my heart. Tap the heart on the right to open my full apology letter.
            </p>

            <div className="relative mt-8">
              <PandaIllustration className="scale-[1.08]" />
              <div className="absolute bottom-12 right-2 rounded-[1.7rem] border border-pink-200/80 bg-white/92 px-4 py-3 text-left shadow-[0_20px_42px_rgba(255,145,180,0.16)] backdrop-blur dark:border-pink-900/60 dark:bg-card/88 sm:right-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-500 dark:text-pink-300">
                  For Sanu
                </p>
                <p className="mt-1 text-sm text-muted-foreground">A tiny letter from my heart.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[2.35rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,246,249,0.98))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-pink-900/40 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:p-7 lg:p-8">
            <Sparkles className="absolute left-6 top-6 h-6 w-6 text-pink-300 dark:text-pink-400" />
            <Star className="absolute right-8 top-8 h-4 w-4 fill-amber-300 text-amber-300 dark:fill-amber-400 dark:text-amber-400" />
            <Heart className="absolute right-16 top-16 h-4 w-4 fill-rose-300 text-rose-300 dark:fill-rose-400 dark:text-rose-400" />

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-pink-500 dark:text-pink-300">
                Panda 1 letter
              </p>
              <h1 className="mt-3 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,141,91,1))] bg-clip-text text-4xl font-black uppercase tracking-[0.16em] text-transparent sm:text-5xl">
                I am sorry
              </h1>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-[2rem] border border-pink-200/80 bg-white/86 px-5 py-4 shadow-[0_18px_36px_rgba(255,145,180,0.1)] backdrop-blur dark:border-pink-900/60 dark:bg-card/72">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500 dark:text-pink-300">
                    Your photo here
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Leave this spot for her favorite picture.
                  </p>
                </div>

                <div className="mt-5">
                  <HeartPhotoPlaceholder label="Sanu photo" src="/images/sanu1.jpeg" alt="Sanu" />
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm text-muted-foreground shadow-sm dark:border-pink-900/60 dark:bg-card/80">
                  <span className="text-lg">🐼</span>
                  <span>Made with love, regret, and hope.</span>
                </div>
              </div>

              <article className="rounded-[2rem] border border-pink-200/80 bg-white/88 p-5 text-left shadow-[0_18px_36px_rgba(255,145,180,0.1)] backdrop-blur dark:border-pink-900/60 dark:bg-card/80 sm:p-6">
                <div className="space-y-4 text-sm leading-7 text-body-foreground sm:text-[15px]">
                  {apologyParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        )}
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}