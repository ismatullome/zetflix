import Image from 'next/image'
import styles from '../styles/404.module.scss'
import logo from '../public/2323.jpg'
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
          <Link href='https://stackoverflow.com/' passHref={true}>
            <Button>StackOverflow</Button>
          </Link>

          <Image className={styles.img} src={logo} height={600} width={1000} />
        </div>
      </Container>
    </>
  )
}
