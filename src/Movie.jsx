import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Movie({ movie }) {
    const [ loaded, setLoaded ] = useState(false);

    return(
        <NavLink to={`/details/${movie.id}`}>
            <div className="movie">
                { !loaded && <div className="loader">Loading...</div>}
                { movie.poster_path && 
                    <img 
                        src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} 
                        onLoad={()=> setLoaded(true)}
                    />
                }
                <h3>{movie.title}</h3>
            </div>
        </NavLink>
    );
        
}