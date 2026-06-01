import { useState } from 'react'
import { references } from '../../data/references'
import { buildRefUrl, altRefUrl } from '../../data/resolveRefPath'
import styles from './ReferenceSection.module.css'

// ---------------------------------------------------------------------------
// ReferenceLink
// Renders the "(Click here.)" anchor for a local image file.
//
// How extension fallback works:
//   1. We set href to the primary URL (e.g. /references/ref-01-....jpg).
//   2. A hidden <img> with the same src probes whether the file actually exists.
//   3. If it 404s (onError fires), we swap href AND the img src to the alternate
//      extension (.jpeg instead of .jpg, or vice versa).
//   4. The user never sees the probe image — it is 1×1 px and aria-hidden.
// ---------------------------------------------------------------------------
interface RefLinkProps {
  refId: number
  filename: string
}

function ReferenceLink({ refId, filename }: RefLinkProps) {
  const primary = buildRefUrl(filename)
  const alternate = altRefUrl(filename)

  const [href, setHref] = useState(primary)

  function handleProbeError() {
    // Primary extension doesn't exist — switch to alternate
    if (href === primary && alternate !== primary) {
      setHref(alternate)
    }
  }

  return (
    <>
      {/* Invisible probe image — detects whether primary URL resolves */}
      <img
        src={href}
        alt=""
        aria-hidden="true"
        onError={handleProbeError}
        style={{ display: 'none', width: 1, height: 1 }}
      />
      <a
        href={href}
        className={styles.references__clickHere}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open source document for reference ${refId}`}
      >
        (Click here.)
      </a>
    </>
  )
}

// ---------------------------------------------------------------------------
// ReferenceSection
// ---------------------------------------------------------------------------
export default function ReferenceSection() {
  return (
    <section
      className={styles.references}
      id="references"
      aria-labelledby="references-heading"
    >
      <div className={styles.references__inner}>
        <h2 className={styles.references__heading} id="references-heading">
          References
        </h2>

        <ol className={styles.references__list} start={1}>
          {references.map((ref) => {
            const hasExternalUrl = Boolean(ref.externalUrl)
            const hasImageFile   = Boolean(ref.imageFile)

            return (
              <li key={ref.id} className={styles.references__item}>
                <span className={styles.references__number}>{ref.id}.</span>
                <span className={styles.references__text}>
                  {ref.title}

                  {/* Local image file — tries .jpg then .jpeg automatically */}
                  {hasImageFile && (
                    <>
                      {' '}
                      <ReferenceLink
                        refId={ref.id}
                        filename={ref.imageFile!}
                      />
                    </>
                  )}

                  {/* External URL (no local file) */}
                  {hasExternalUrl && !hasImageFile && (
                    <>
                      {' '}
                      <a
                        href={ref.externalUrl}
                        className={styles.references__link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open reference ${ref.id} (external link)`}
                      >
                        (Link)
                      </a>
                    </>
                  )}

                  {/* External URL when BOTH imageFile AND externalUrl are set */}
                  {hasExternalUrl && hasImageFile && (
                    <>
                      {' '}
                      <a
                        href={ref.externalUrl}
                        className={styles.references__link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`External link for reference ${ref.id}`}
                      >
                        (Link)
                      </a>
                    </>
                  )}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
