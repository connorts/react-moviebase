import Movies from "./Movies";
import { useLoaderData } from "react-router-dom";
import { fetchTopRated } from './moviesAPI'

export async function loader() {
    const topRated = fetchTopRated();
    return topRated;
}

export default function TopRated() {
    const topRated = useLoaderData();

    return (
        <Movies movies={topRated}/>
    );
}