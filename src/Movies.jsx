import Movie from "./Movie";

export default function Movies({ movies }) {
    return (
        <ul className="movie-list">
            {movies?.map((movie) => (
                <li key={movie.id}>
                    <Movie movie={movie} />
                </li>
            ))}
        </ul>
    );
}