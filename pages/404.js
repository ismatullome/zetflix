import Image from 'next/image'
import styles from '../styles/404.module.scss'
import logo from '../public/2323.jpg'
import Linker from '../components/Linker'
import Container from '../components/Container'

export default function Error() {
  return (
    <Container keywords={'users ism4t'}>
      <div className={styles.div}>
        <Linker
          className={styles.link}
          href={'/'}
          text='Вернуть главную страницу'
        />
        <a href='https:/t.me/ism4t'>Developer</a>
        <Image className={styles.img} src={logo} height={600} width={1000} />
      </div>
    </Container>
  )
}
