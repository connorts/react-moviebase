import Movies from "./Movies";
import { useLoaderData } from "react-router-dom";
import { fetchNowPlaying } from './moviesAPI';

export async function loader() {
    const nowPlaying = fetchNowPlaying();
    return nowPlaying;
}

export default function NowPlaying() {
    const nowPlaying = useLoaderData();

    return (
        <Movies movies={nowPlaying}/>
    );
}