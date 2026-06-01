import styles from './ImageSection.module.css'

interface ImageSectionProps {
  src: string
  alt: string
  caption?: string
  rounded?: boolean
  width?: number
  height?: number
  className?: string
}

export default function ImageSection({
  src,
  alt,
  caption,
  rounded = false,
  width,
  height,
  className = '',
}: ImageSectionProps) {
  return (
    <figure
      className={`${styles.imageSection} ${className}`}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        className={`${styles.imageSection__img} ${rounded ? styles['imageSection__img--rounded'] : ''}`}
      />
      {caption && (
        <figcaption className={styles.imageSection__caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
