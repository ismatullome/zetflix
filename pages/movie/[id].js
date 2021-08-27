import { useRouter } from 'next/router'
import Container from '../../components/Container'
import styles from '../../styles/id.module.scss'
import key from '../../config/config'

export async function getServerSideProps() {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
  )
  const data = await res.json()

  return { props: { data } }
}

export default function Movieid(movies) {
  const query = useRouter()
  let videoKey = null
  const getVideo = async () => {
    const data2 = await fetch(
      `https://api.themoviedb.org/3/movie/${query.query.id}/videos?api_key=${key}`
    )
    const video = await data2.json()
    videoKey = video.results[0].key
    console.log(videoKey)
  }
  getVideo()

  return (
    <Container>
      <div className={styles.container}>
        {movies.data.results.map((movie) => {
          return movie.id == query.query.id ? (
            <>
              <h1> Movie id: {query.query.id} </h1>
              <h1>
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
              {/* <iframe
                width='560'
                height='315'
                src={`https://youtube.com/watch?v=${videoKey}`}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen></iframe> */}

              <video
                width='560'
                height='315'
                src={`https://youtube.com/embed/${videoKey}?showinfo=0`}
                frameborder='0'
                allowfullscreen></video>
            </>
          ) : (
            <></>
          )
        })}
      </div>
    </Container>
  )
}
