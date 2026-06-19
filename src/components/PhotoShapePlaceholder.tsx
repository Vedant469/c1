import type { CSSProperties } from 'react'

type PhotoShapePlaceholderProps = {
  label: string
  variant?: 'circle' | 'heart' | 'rounded'
  className?: string
  style?: CSSProperties
}

export default function PhotoShapePlaceholder({
  label,
  variant = 'circle',
  className = '',
  style,
}: PhotoShapePlaceholderProps) {
  const mergedStyle: CSSProperties = {
    width: 160,
    height: 160,
    ...style,
  }

  const content = (
    <div className="photo-shape-content">
      <div className="photo-placeholder-icon">📷</div>
      <div className="photo-placeholder-tag">Photo</div>
      <div className="photo-placeholder-label">{label}</div>
    </div>
  )

  if (variant === 'heart') {
    return (
      <div className={`photo-shape-heart ${className}`.trim()} style={mergedStyle}>
        <span className="heart-lobe left" />
        <span className="heart-lobe right" />
        <span className="heart-point" />
        {content}
      </div>
    )
  }

  return (
    <div className={`photo-shape-box ${variant} ${className}`.trim()} style={mergedStyle}>
      {content}
    </div>
  )
}