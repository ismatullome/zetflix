import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
import styles from '../styles/Users.module.scss'
import key from '../config/config'
import Image from 'next/image'

// const imgSite = 'http://image.tmdb.org/t/p/w500/'

export async function getStaticProps() {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
  )
  const movies = await res.json()
  // console.log(post.results.id)
  // console.log(res)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movies,
    },
  }
}
function Movies({ movies }) {
  return (
    <>
      <div className={styles.container}>
        {movies.results.map((movie) => (
          <div className={styles.movie}>
            <img
              className={styles.img}
              width='282'
              height='160'
              src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt='Picture of the author'
            />
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.desc}>{movie.overview}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movies

// export async function getStaticProps(context) {
//   const response = await fetch(
//     `http://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
//   )
//   const movies = await response.json()
//   // console.log(movies)
//   const data = movies.results
//   const imgUrl = movies.results[1].backdrop_path

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

// const Users = ({ data }) => {
//   return (
//     <Container keywords={'users ism4t'}>
//       <div className={styles.users}>
//         <ul> {JSON.stringif(imgUrl)} </ul>
//       </div>
//     </Container>
//   )
// }

// export default Users
