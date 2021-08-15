import Link from 'next/link'
import styles from '../styles/Linker.module.css'

export default function Linker({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}
