import { useRouter } from 'next/router'

export default function id() {
  const query = useRouter()
  const id = query.query.id
  return id
}
