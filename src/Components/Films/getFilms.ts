const FILMS = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

export type OneFilm = {
    genre_ids: number[],
    id: number,
    title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    vote_average: number,
};

type Response = {
    page: number,
    results: OneFilm[],
    total_pages: number,
    total_results: number,
};

// type FilmsParams = { limit?: number, search?: string };

export const getFilms = async () => {
    const filmsUrl = new URL(FILMS);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
        }
    };
    const response = await fetch(filmsUrl, options);
    const result: Response = await response.json();
    return result.results
};

type OneGenre = {
    id: number,
    name: string
}

type Genres = {
    genres: OneGenre [],
}

export const getGenres = async () => {
    const genresUrl = new URL(GENRES)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
        }
    };

    const response = await fetch(genresUrl, options);
    const result: Genres = await response.json();
    console.log("🚀 ~ file: getFilms.ts:54 ~ getGenres ~ result:", result.genres)
    return result.genres
}