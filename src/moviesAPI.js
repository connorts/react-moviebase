const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjA0NDg5Mzg4NzdkM2IxMDEzYTAyNDhhNzE2OWNkZSIsIm5iZiI6MTcyNjUxMjM3MS4yOTk4NTYsInN1YiI6IjY2ZTg3ODU1ZTgyMTFlY2QyMmIxMzJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-toQRIJ43lbjvHd0K43CPPPoNPHPIoNgiWio1sQ-iI'
    }
};

export async function searchMovies(query) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    const resData = await response.json();
    return resData.results;
}

export async function fetchNowPlaying() {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const resData = await response.json();
    return resData.results;
}

export async function fetchPopular() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const resData = await response.json();
    return resData.results;
}

export async function fetchTopRated() {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const resData = await response.json();
    return resData.results;
}

export async function fetchUpcoming() {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const resData = await response.json();
    return resData.results;
}

export async function fetchMovieDetails(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    const resData = await response.json();
    return resData;
}