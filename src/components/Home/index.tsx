import { Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { api } from '../../services/api'

// interface moviesTypes {
//   id: number
//   name: string
//   year: number
// }

const Home = () => {
  //   const [movies, setMovies] = useState<moviesTypes[]>([])

  useEffect(() => {
    api.get('movies').then((resp) => console.log(resp.data))
  }, [])

  return (
    <>
      <Text>Teste</Text>
    </>
  )
}

export default Home
