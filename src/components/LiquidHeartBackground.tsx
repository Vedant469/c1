import './liquid-heart-background.css'

export default function LiquidHeartBackground() {
  return (
    <div className="liquid-heart-background" aria-hidden="true">
      <div className="liquid-heart-background__wash" />
      <div className="liquid-heart-background__glow" />
      <div className="liquid-heart-background__heart" />
      <div className="liquid-heart-background__heart liquid-heart-background__heart--secondary" />
      <div className="liquid-heart-background__ripple" />
      <div className="liquid-heart-background__ripple liquid-heart-background__ripple--secondary" />
      <div className="liquid-heart-background__blob liquid-heart-background__blob--one" />
      <div className="liquid-heart-background__blob liquid-heart-background__blob--two" />
      <div className="liquid-heart-background__blob liquid-heart-background__blob--three" />
      <div className="liquid-heart-background__blob liquid-heart-background__blob--four" />
      <span className="liquid-heart-background__mini-heart liquid-heart-background__mini-heart--one">❤</span>
      <span className="liquid-heart-background__mini-heart liquid-heart-background__mini-heart--two">❤</span>
      <span className="liquid-heart-background__mini-heart liquid-heart-background__mini-heart--three">❤</span>
      <span className="liquid-heart-background__mini-heart liquid-heart-background__mini-heart--four">❤</span>
    </div>
  )
}