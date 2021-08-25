import { useRouter } from 'next/router'
import Container from '../../components/Container'
import styles from '../../styles/id.module.scss'
import Head from 'next/head'

export default function Movieid() {
  const query = useRouter()
  const results = query.components['/popular'].props.pageProps.movies.results
  console.log(results)

  return (
    <>
      <Container>
        <div className={styles.container}>
          {results.map((movie) => {
            return movie.id == query.query.id ? (
              <>
                <h1>Movie id: {query.query.id} </h1>
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
                {/* <iframe
                  width='560'
                  height='315'
                  src={`https://www.youtube-nocookie.com/embed/${key}?controls=0`}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe> */}
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

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `http://api.themoviedb.org/3/${q.query.id}/videos?api_key=${key}`
//   )
//   const data = await res.json()
//   console.log(data)
//   // Pass data to the page via props
//   return { props: { data } }
// }
