import { useLoaderData } from "react-router-dom";
import { fetchMovieDetails } from "./moviesAPI";

export async function loader({ params }) {
    const details = await fetchMovieDetails(params.movieId);
    return { details };
}

export default function MovieDetail() {
    const { details } = useLoaderData();
    console.log(details)

    return(
        <div className="details">
            {details.poster_path && <img src={"https://image.tmdb.org/t/p/w342/" + details.poster_path}/>}
            <div className="text-details">
                <h2>{details.title}</h2>
                <div className="movie-info">
                    <span className="details-span">
                        <p>{details.release_date.substring(0,4)}</p>
                        <p>|</p>
                        <p>{details.runtime + "m"}</p>
                        <p>|</p>
                        <p>{details.vote_average + "/10 (" + details.vote_count + " votes)"}</p>
                    </span>
                    <p>{details.overview}</p>
                </div>
            </div>
            
        </div>
    );
}