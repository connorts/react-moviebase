import Movies from "./Movies";
import { useLoaderData } from "react-router-dom";
import { fetchPopular } from './moviesAPI'

export async function loader() {
    const popular = fetchPopular();
    return popular;
}

export default function Popular() {
    const popular = useLoaderData();

    return (
        <Movies movies={popular}/>
    );
}