import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
import styles from '../styles/popular.module.scss'
import key from '../config/config'
import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/popular?api_key=${key}`
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
    <Container title='Popular movies' keywords={'start main'}>
      <div className={styles.container}>
        {movies.results.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/popular/${movie.id}`}>
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
  )
}

export default Movies
