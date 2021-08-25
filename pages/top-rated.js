import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
import styles from '../styles/top-rated.module.scss'
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
  console.log(movies.results)

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
      <Container title='Top rated movies' keywords={'start main'}>
        <div className={styles.container}>
          {movies.results.map((movie) => (
            <div className={styles.movie} key={movie.id}>
              <Link href={`/top-rated/${movie.id}`}>
                <a>
                  <img
                    className={styles.img}
                    width='353.5'
                    height='200'
                    src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt='Picture of movie'
                  />
                </a>
              </Link>
              <h1 className={styles.title}>{movie.title}</h1>
              <p className={styles.desc}>{movie.overview}</p>
            </div>
          ))}
        </div>
      </Container>
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
