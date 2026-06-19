type LiquidBackgroundProps = {
  theme?: 'pink' | 'sunset'
}

export default function LiquidBackground({
  theme = 'pink',
}: LiquidBackgroundProps) {
  return (
    <div className={`liquid-bg ${theme}`} aria-hidden="true">
      <span className="blob one" />
      <span className="blob two" />
      <span className="blob three" />
      <span className="blob four" />
    </div>
  )
}
