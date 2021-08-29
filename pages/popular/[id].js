import { useRouter } from 'next/router'
import Container from '../../components/Container'
import styles from '../../styles/id.module.scss'
import Head from 'next/head'
import key from '../../config/config'

export async function getServerSideProps() {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/popular?api_key=${key}`
  )
  const data = await res.json()

  return { props: { data } }
}

export default function Movieid(movies) {
  const query = useRouter()

  return (
    <>
      <Container>
        <div className={styles.container} key='key'>
          {movies.data.results.map((movie) => {
            return movie.id == query.query.id ? (
              <>
                <h1>Movie id: {query.query.id} </h1>
                <h1>
                  {' '}
                  {movie.original_title} ({movie.release_date}) watch online!{' '}
                </h1>
                <h2> {movie.title} </h2>
                <p> {movie.overview} </p>
                <h3> Vote average : {movie.vote_average} </h3>
                <h3> Vote count: {movie.vote_count} </h3>
                <img
                  src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=''
                />
              </>
            ) : (
              <></>
            )
          })}
        </div>
      </Container>
    </>
  )
}
