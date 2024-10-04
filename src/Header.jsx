import { NavLink, Form, useLoaderData, useSubmit } from "react-router-dom";

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query")
    return { query };
}

export default function Header() {
    const submit = useSubmit(); 
    const { query } = useLoaderData();

    return(
        <header>
        <h1>The Movie Database</h1>
        <Form id="search-form" role="search">
            <input 
                className="search"
                id="q"
                aria-label="Search movies"
                placeholder="Search"
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
    );
}