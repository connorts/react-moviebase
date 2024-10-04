import Movies from "./Movies";
import { useLoaderData } from "react-router-dom";
import { fetchUpcoming } from './moviesAPI'

export async function loader() {
    const upcoming = fetchUpcoming();
    return upcoming;
}

export default function Upcoming() {
    const upcoming = useLoaderData();

    return (
        <Movies movies={upcoming}/>
    );
}