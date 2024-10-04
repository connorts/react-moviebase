import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { NavLink, Form, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { searchMovies } from './moviesAPI';
import Movies from "./Movies";

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query")
    const movies = await searchMovies(query);
    return { query, movies };
}

export default function Root() {
    const { query, movies } = useLoaderData();
    const submit = useSubmit(); 

    useEffect(() => {
        document.getElementById("query").value = query;
    }, [query]);

  return (
    <>
      <header>
        <h1>The Movie Database</h1>
        <Form id="search-form" role="search">
            <input 
                className="search"
                id="query"
                aria-label="Search movies"
                placeholder="Search all movies"
                type="search"
                name="query"
                defaultValue={query}
                onChange={(event) => {
                    const isFirstSearch = query == null;
                    submit(event.currentTarget.form, {
                        replace: !isFirstSearch,
                    });
                }}
            />
        </Form>
        <nav>
          <NavLink to={"/now_playing"} className="nav-item">Now Playing</NavLink>
          <NavLink to={"/popular"} className="nav-item">Popular</NavLink>
          <NavLink to={"/top_rated"} className="nav-item">Top Rated</NavLink>
          <NavLink to={"/upcoming"} className="nav-item" >Upcoming</NavLink>
        </nav>
      </header>
      <div>
        {query && <Movies movies={movies}/>}
        <Outlet />
      </div>
    </>
  )
}

