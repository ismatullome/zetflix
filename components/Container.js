import Linker from './Linker'
import Head from 'next/head'
import styles from '../styles/Container.module.scss'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'test ism4t, nextjs' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <Linker href={'/'} text='Главная' />
        <Linker href={'/users'} text='Пользователи' />
        <Linker href={'/about'} text='О нас' />
        <Linker href={'/contact'} text='Связь с нами' />
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainContainer
