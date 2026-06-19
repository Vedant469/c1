type BackToPandasPandaProps = {
  onClick: () => void
}

export default function BackToPandasPanda({
  onClick,
}: BackToPandasPandaProps) {
  return (
    <button type="button" className="back-panda" onClick={onClick}>
      <span className="back-panda-text">Click me</span>

      <span className="back-panda-face">
        <span className="back-ear left" />
        <span className="back-ear right" />
        <span className="back-head" />
        <span className="back-patch left" />
        <span className="back-patch right" />
        <span className="back-eye left" />
        <span className="back-eye right" />
        <span className="back-nose" />
        <span className="back-smile left" />
        <span className="back-smile right" />
      </span>
    </button>
  )
}