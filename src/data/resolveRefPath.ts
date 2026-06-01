/**
 * resolveRefPath.ts
 *
 * Given a reference image filename (which may be .jpg OR .jpeg),
 * returns the URL to use as the href for "Click here." links.
 *
 * Strategy
 * --------
 * The file on disk may have a different extension to what is stored in
 * references.ts (e.g. the entry says "ref-01-...jpg" but the actual file is
 * "ref-01-....jpeg", or vice versa).
 *
 * `buildRefUrl(filename)` returns the primary URL from the stored filename.
 * `altExtension(filename)`  returns the same name with the other extension.
 *
 * The <ReferenceLink> component uses an <a> whose href is the primary path,
 * but attaches an onError fallback on a hidden <img> probe — if the primary
 * 404s the displayed href is swapped to the alternate extension automatically.
 */

export const REFERENCES_BASE = '/references/'

/** Return the public URL for a reference filename as stored in references.ts */
export function buildRefUrl(filename: string): string {
  return `${REFERENCES_BASE}${filename}`
}

/**
 * Return the URL with the *other* jpg/jpeg extension.
 * "file.jpg"  → "/references/file.jpeg"
 * "file.jpeg" → "/references/file.jpg"
 * Any other extension is returned unchanged.
 */
export function altRefUrl(filename: string): string {
  if (filename.endsWith('.jpeg')) {
    return `${REFERENCES_BASE}${filename.slice(0, -5)}.jpg`
  }
  if (filename.endsWith('.jpg')) {
    return `${REFERENCES_BASE}${filename.slice(0, -4)}.jpeg`
  }
  return `${REFERENCES_BASE}${filename}`
}
