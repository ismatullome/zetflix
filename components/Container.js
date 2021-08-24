import Link from 'next/link'
import Image from 'next/image'
import Linker from './Linker'
import Head from 'next/head'
import styles from '../styles/Container.module.scss'
import logo from '../public/logo.png'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'test ism4t, nextjs' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className={styles.navbar}>
        <div className={styles.nav_cont}>
          <Link className={styles.logo} href='/'>
            <a className={styles.logo}></a>
          </Link>
          <Linker href={'/top-rated'} text='Top rated' />
          <Linker href={'/popular'} text='Popular' />
          <Linker href={'/contact'} text='Связь с нами' />
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainContainer
