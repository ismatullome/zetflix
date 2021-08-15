import Linker from './Linker'
import Head from 'next/head'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'test ism4t, nextjs' + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className='navbar'>
        <Linker href={'/'} text='Главная' />
        <Linker href={'/users'} text='Пользователи' />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer
