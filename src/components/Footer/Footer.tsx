import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="bottom-of-page">
      <div className={styles.footer__inner}>
        <p className={styles.footer__text}>
          © Sardar Mohan Singh Memorial &nbsp;|&nbsp;{' '}
          <a
            href="https://modernschoolpatiala.org"
            className={styles.footer__link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Modern Senior Secondary School, Patiala
          </a>
        </p>
      </div>
    </footer>
  )
}
