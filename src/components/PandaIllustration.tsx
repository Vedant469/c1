type PandaIllustrationProps = {
  mood?: 'happy' | 'sad'
  className?: string
}

export default function PandaIllustration({
  mood = 'happy',
  className = '',
}: PandaIllustrationProps) {
  const isSad = mood === 'sad'

  return (
    <div className={`panda-illustration ${isSad ? 'sad' : 'happy'} ${className}`.trim()}>
      {!isSad ? (
        <>
          <span className="panda-float-heart heart-1">♥</span>
          <span className="panda-float-heart heart-2">♥</span>
          <span className="panda-float-heart heart-3">♥</span>
          <span className="panda-float-heart heart-4">♥</span>
        </>
      ) : null}

      <span className="panda-ear left" />
      <span className="panda-ear right" />

      <div className="panda-head">
        <div className="panda-eye-patch left">
          <span className="panda-eye" />
        </div>
        <div className="panda-eye-patch right">
          <span className="panda-eye" />
        </div>

        <div className="panda-snout">
          <span className="panda-nose" />
          <span className={`panda-mouth left ${isSad ? 'sad-mouth' : 'happy-mouth'}`} />
          <span className={`panda-mouth right ${isSad ? 'sad-mouth' : 'happy-mouth'}`} />
        </div>
      </div>

      <div className="panda-body" />
      <div className="panda-paw left" />
      <div className="panda-paw right" />
    </div>
  )
}