import { useRouter } from 'next/router'
import Container from '../../components/Container'

export default function Movieid() {
  const query = useRouter()
  const results = query.components['/'].props.pageProps.movies.results
  return (
    <Container>
      <div>
        {/* {results.map((movie) => {
          if( movie.id == query.query.id ) {
            console.log(123);
          }
        }
      } */}
        {results.map((movie) => {
          return movie.id == query.query.id ? (
            <>
              <div> movie name {movie.original_title}</div>
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
      <div>
        <h1>Id movie {query.query.id} </h1>
      </div>
    </Container>
  )
}
