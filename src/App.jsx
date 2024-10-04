import './App.css'
import Movies from './Movies'

function App() {

  return (
    <>
      <header>
        <h1>The Movie Database</h1>
        <div>
          <button>Now Playing</button>
          <button>Popular</button>
          <button>Top Rated</button>
          <button>Upcoming</button>
        </div>
      </header>
      <div>
        <Movies />
      </div>
    </>
  )
}

export default App
