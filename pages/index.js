import { useState, useEffect } from 'react'
import Link from 'next/link'
import Container from '../components/Container'
import styles from '../styles/top-rated.module.scss'
import key from '../config/config'
import Image from 'next/image'
import Head from 'next/head'

export async function getStaticProps() {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
  )
  const movies = await res.json()

  return {
    props: {
      movies,
    },
  }
}
function Index({ movies }) {
  return (
    <>
      <Container keywords={'start main'}>
        <div className={styles.container}>
          {movies.results.map((movie) => (
            <div className={styles.movie} key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
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

export default Index
