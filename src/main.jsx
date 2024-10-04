import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root, { loader as searchLoader } from './Root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as nowPlayingLoader } from './NowPlaying.jsx'
import NowPlaying  from './NowPlaying.jsx'
import Popular, { loader as popularLoader }from './Popular.jsx'
import TopRated, { loader as topRatedLoader } from './TopRated.jsx'
import Upcoming, { loader as upcomingLoader} from './Upcoming.jsx'
import MovieDetail, { loader as detailsLoader } from './MovieDetail.jsx'
import Index from './Index.jsx'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: searchLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/now_playing",
            element: <NowPlaying />,
            loader: nowPlayingLoader,
          },
          {
            path: "/popular",
            element: <Popular />,
            loader: popularLoader,
          },
          {
            path: "/top_rated",
            element: <TopRated />,
            loader: topRatedLoader,
          },
          {
            path: "/upcoming",
            element: <Upcoming />,
            loader: upcomingLoader,
          },
          {
            path: "/details/:movieId",
            element: <MovieDetail />,
            loader: detailsLoader,
          },

        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
