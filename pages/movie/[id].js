import { useRouter } from 'next/router'
import Container from '../../components/Container'
import styles from '../../styles/id.module.scss'

export default function Movieid() {
  const query = useRouter()
  const results = query.components['/'].props.pageProps.movies.results
  console.log(results)
  return (
    <Container>
      <div className={styles.container}>
        {results.map((movie) => {
          return movie.id == query.query.id ? (
            <>
              <h1> Movie id: {query.query.id} </h1>
              <h1>
                {' '}
                {console.log(movie)} {movie.original_title} (
                {movie.release_date}) watch online!{' '}
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
  )
}