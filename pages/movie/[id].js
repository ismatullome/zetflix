import { useRouter } from 'next/router'
import Container from '../../components/Container'

export default function Movieid() {
  const query = useRouter()
  console.log(query)
  return (
    <Container>
      <div>
        <h1>Id movie {query.query.id} </h1>
      </div>
    </Container>
  )
}
