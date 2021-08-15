import { useRouter } from 'next/router'
import styles from '../../styles/Users.module.scss'
import Container from '../../components/Container'

export default function User({ user }) {
  const { query } = useRouter()
  return (
    <Container keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await response.json()
  return {
    props: { user }, // will be passed to the page component as props
  }
}
