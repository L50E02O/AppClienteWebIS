interface IPelicula {
    id: number;
    nombre: string;
    descripcion: string;
    url: string;
}

interface IPeliculaProps {
    nombre: string;
    url: string;
}

const Pelicula = ({ nombre, url }: IPeliculaProps) => {
    return (
        
        <div className="pelicula">
            <h2 style={{ backgroundColor: "Red" }}>{nombre}</h2>
            <img style={{width: "10px", height: "5px" }}  src={url} alt={nombre} />
        </div>
    );
}
export default Pelicula;
export type { IPelicula };