import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
import styles from '../styles/Users.module.scss'

const Users = ({ users }) => {
  return (
    <Container keywords={'users ism4t'}>
      <div className={styles.users}>
        <h1>Cписок пользователей</h1>
        <ul>
          {users.map((user) => (
            <li className={styles.user} key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a className={styles.user_link}>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()

  return {
    props: { users }, // will be passed to the page component as props
  }
}
