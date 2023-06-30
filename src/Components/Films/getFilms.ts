const FILMS = 'https://api.themoviedb.org/3/trending/movie/day';
const GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
const FINDBYID = 'https://api.themoviedb.org/3/movie'
const FINDBYSEARCH = 'https://api.themoviedb.org/3/search/movie'

export type OneFilm = {
    genre_ids: number[],
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
};

export type OneFilmWithGenre = OneFilm & { genre: (string | undefined)[] };

export type Response = {
    page: number,
    results: OneFilm[],
    total_pages: number,
    total_results: number,
};

export const getFilms = async (page?: number) => {
    const filmsUrl = new URL(FILMS);
    if (page) filmsUrl.searchParams.set("page", String(page));
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
        }
    };
    const response = await fetch(filmsUrl, options);
    const result: Response = await response.json();
    return result
};

export type FilmForSinglePage = {
    budget: number,
    genres: OneGenre[],
    id: number,
    overview: string,
    poster_path: string,
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string,
    runtime: number,
    tagline: string,
    title: string,
    vote_average: number,
}

export type ProductionCompanies = { name: string }

export type ProductionCountries = { name: string }

export const getFilm = async (filmId: string) => {
    const filmsUrl = new URL(FINDBYID + '/' + filmId);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
        }
    };
    const response = await fetch(filmsUrl, options);
    const result: FilmForSinglePage = await response.json();
    console.log("🚀 ~ file: getFilms.ts:48 ~ getFilm ~ result:", result)

    return result
}

export type OneGenre = {
    id: number,
    name: string
}

export type Genres = {
    genres: OneGenre[],
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
    return result.genres
}

type SearchParams = { search?: string }

export const getFilmsBySearch = async ({ search }: SearchParams) => {
    const filmsUrl = new URL(FINDBYSEARCH);
    filmsUrl.searchParams.set("search", String(search));
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
        }
    };

    const response = await fetch(filmsUrl, options);
    const result: Response = await response.json();
    return result
}