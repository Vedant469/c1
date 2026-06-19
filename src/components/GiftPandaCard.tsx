type GiftPandaCardProps = {
  title: string
  note: string
  giftColorClass: string
  onClick: () => void
}

export default function GiftPandaCard({
  title,
  note,
  giftColorClass,
  onClick,
}: GiftPandaCardProps) {
  return (
    <button type="button" className="gift-card" onClick={onClick}>
      <div className="mini-panda-scene">
        <span className="mini-ear left" />
        <span className="mini-ear right" />

        <div className="mini-head">
          <div className="mini-eye-patch left">
            <span className="mini-eye" />
          </div>
          <div className="mini-eye-patch right">
            <span className="mini-eye" />
          </div>

          <div className="mini-snout">
            <span className="mini-nose" />
            <span className="mini-smile left" />
            <span className="mini-smile right" />
          </div>
        </div>

        <div className="mini-body" />
        <div className="mini-paw left" />
        <div className="mini-paw right" />

        <div className={`gift-box ${giftColorClass}`}>
          <span className="gift-ribbon-v" />
          <span className="gift-ribbon-h" />
        </div>
      </div>

      <h3>{title}</h3>
      <p>{note}</p>
    </button>
  )
}