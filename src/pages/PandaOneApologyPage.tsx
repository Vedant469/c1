import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackToPandasPanda from '../components/BackToPandasPanda'
import LiquidBackground from '../components/LiquidBackground'
import PandaIllustration from '../components/PandaIllustration'
import PhotoShapePlaceholder from '../components/PhotoShapePlaceholder'

const apologyMessage = `My Dear Sanu ❤️🥺,

I know I have hurt you, and I know that somewhere along the way I made mistakes that broke your trust and made you feel disappointed 😔💔. Every day I think about it, and the truth is, I hate knowing that I am the reason for your pain 😞.

When you said we should take a break until our careers are settled, I tried to understand your point of view 🥺. I know our future is important 🌸✨, and I know we both have dreams to achieve 🎯💫. But the thought of being away from you hurts more than I can explain 💔😭.

You are not just my girlfriend, Sanu ❤️. You are the person who made my ordinary days feel special 🌹, the person whose messages made me smile 😊💕, and the person I imagined in every part of my future 🫶✨. The idea of waking up without you in my life feels empty 😔.

I am not perfect 😞, and I am not asking you to ignore my mistakes 🙏. I am only asking you to look at my love for you ❤️. It has never been fake 🤍, and it has never changed 🥺. Even after every argument, every misunderstanding, and every mistake, my heart still chooses you 💘.

I don't want a future where we become strangers 😭💔. I want a future where we look back at this difficult phase and say, "We survived it together" 🤝❤️. I want to work hard for my career 💼✨, make you proud 🥹🌹, and still hold your hand through every challenge 🫂❤️. I don't want success if it comes at the cost of losing you 😔💔.

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
    <main className="screen">
      <LiquidBackground theme="pink" />

      <button
        type="button"
        className="floating-heart-toggle"
        onClick={() => setShowLetter((current) => !current)}
        aria-label={showLetter ? 'Close letter' : 'Open letter'}
      >
        <span className="floating-heart-icon">❤</span>
        <span className="floating-heart-label">{showLetter ? 'Close' : 'Open'}</span>
      </button>

      <section className="page-shell">
        <div className="glass-card panda-page-card">
          {!showLetter ? (
            <div className="panel hero-panel">
              <p className="page-kicker">Panda 1</p>
              <h1 className="section-title">I am sorry</h1>
              <p className="section-subtitle">
                Tap the heart on the right to open my full apology letter.
              </p>

              <PandaIllustration mood="happy" />

              <div className="soft-chip">For Sanu — a little note from my heart.</div>
            </div>
          ) : (
            <div className="panel">
              <p className="page-kicker">Panda 1 letter</p>
              <h1 className="section-title">I am sorry</h1>

              <div className="letter-layout">
                <div className="photo-column">
                  <div className="photo-caption-card">
                    <p className="photo-caption-title">Your photo here</p>
                    <p className="photo-caption-copy">
                      Leave this spot for her favorite picture.
                    </p>
                  </div>

                  <PhotoShapePlaceholder
                    label="Add Sanu's photo here"
                    variant="heart"
                    style={{ width: 260, height: 260 }}
                  />

                  <div className="soft-chip">Made with love, regret, and hope.</div>
                </div>

                <article className="message-card">
                  {apologyParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              </div>
            </div>
          )}
        </div>
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}