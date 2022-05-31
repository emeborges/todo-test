import { createServer } from 'miragejs'
import Home from '../src/components/Home'

createServer({
  routes() {
    this.get('/api/movies', () => ({
      movies: [
        { id: 1, name: 'Inception', year: 2010 },
        { id: 2, name: 'Interstellar', year: 2014 },
        { id: 3, name: 'Dunkirk', year: 2017 },
      ],
    }))
  },
})

export default function App() {
  return <Home />
}
