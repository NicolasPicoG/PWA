const API_KEY = 'a7026b99934afbac930f68b59ae6c22f';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a7026b99934afbac930f68b59ae6c22f';
const imgUrl = 'https://image.tmdb.org/t/p/w400';



function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=a7026b99934afbac930f68b59ae6c22f`;
    return url;
}


function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch((onError) => {
        });

}


function searchMovie(value) {
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleError);

}

function getUpcomingMovies() {
    const path = '/movie/upcoming';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Upcoming Movies' });
    requestMovies(url, render, handleError);

}


function getTopRatedMovies() {
    const path = '/movie/top_rated';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Top Rated Movies' });
    requestMovies(url, render, handleError);

}

function getPopularMovies() {
    const path = '/movie/popular';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleError);

}

