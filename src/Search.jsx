import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { searchMovies } from './moviesAPI';
import Movies from "./Movies";

export async function loader({ request }) {
    console.log("search loader")
    const url = new URL(request.url);
    const query = url.searchParams.get("query")
    const movies = await searchMovies(query);
    return { query, movies };
}

export default function Search() {
    const { query, movies } = useLoaderData();

    useEffect(() => {
        document.getElementById("query").value = query;
        console.log(`query: ${query}`)
    }, [query]);

    return(
        <Movies movies={movies}/>
    );
}