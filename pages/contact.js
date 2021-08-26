import Image from 'next/image'
import styles from '../styles/404.module.scss'
import avatar from '../public/authorLogo.png'
import Linker from '../components/Linker'
import Container from '../components/Container'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      <Container keywords={'users ism4t'}>
        <div className={styles.div}>
          <Linker
            className={styles.link}
            href={'/'}
            text='Вернуть главную страницу'
          />

          <Link href='https://t.me/ism4t'>Developer</Link>
          <Link href='https://github.com/1smat'>Github</Link>

          <Image className={styles.img} src={avatar} height={200} width={200} />
        </div>
      </Container>
    </>
  )
}
