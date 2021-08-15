import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
const Users = ({ users }) => {
  return (
    <Container keywords={'users ism4t'}>
      <h1>Cписок пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
