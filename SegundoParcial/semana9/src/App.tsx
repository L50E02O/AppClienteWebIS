import './App.css'
import ICartelera from './components/cartelera'
import type { IPelicula } from './components/pelicula'

const peliculas: IPelicula[] = [
  {
    id: 1,
    nombre: 'Avatar',
    descripcion: 'Una película épica de ciencia ficción.',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3d4m8k0c9j5z7e6f8a4d8f8a4d8f8a4d.jpg'
  },
  {
    id: 2,
    nombre: 'Avengers: Endgame',
    descripcion: 'El épico final de la saga de los Vengadores.',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3d4m8k0c9j5z7e6f8a4d8f8a4d8f8a4d.jpg'
  },
  {
    id: 3,
    nombre: 'Inception',
    descripcion: 'Un thriller de ciencia ficción sobre los sueños.',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3d4m8k0c9j5z7e6f8a4d8f8a4d8f8a4d.jpg'
  }
]

function App() {

  return (
  <>  <ICartelera peliculas={peliculas}/>
      </>
  )
}

export default App
