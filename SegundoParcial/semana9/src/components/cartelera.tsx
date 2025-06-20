import type { IPelicula } from './pelicula';
import Pelicula from './pelicula';

interface ICartelera {
    peliculas: IPelicula[];
}

const Cartelera = ({ peliculas }: ICartelera) => {
    return (
        <div className="cartelera">
            <h1>Cartelera de Películas</h1>
            {peliculas.map((pelicula) => (
       < Pelicula 
                key={pelicula.id}
                nombre={pelicula.nombre}
                url={pelicula.url}
            />
            ))}
        </div>
    );
};

export default Cartelera;