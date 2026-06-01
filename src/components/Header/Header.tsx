import { useState } from 'react'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home',             href: '#top' },
  { label: 'Early Life',       href: '#early-life' },
  { label: 'Banking',          href: '#banking' },
  { label: 'Education',        href: '#education' },
  { label: 'Religion',         href: '#religion-culture' },
  { label: 'References',       href: '#references' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={styles.header} role="banner">
      <div className={styles.header__inner}>
        <a
          href="#top"
          className={styles.header__brand}
          aria-label="Sardar Mohan Singh — Home"
        >
          SARDARMOHANSIGH.COM
        </a>

        {/* Desktop navigation */}
        <nav className={styles.header__nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles['header__nav-link']}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          className={styles.header__toggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-nav"
        className={`${styles.header__mobileNav} ${menuOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles['header__mobileNav-link']}
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
