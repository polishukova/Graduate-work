import { useAppSelector } from "../../Store/store"
import { RenderFilm } from "../Films/RenderFilm"
import { OneGenre } from "../Films/getFilms"
import '..//Films/AllFilms.scss'

export const FavoriteFilms = () => {
    const films = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.genres.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.films.films.map(film => ({ ...film, genre: genresIdsToNames(film.genre_ids) }))
    })

    const favFilms = films.filter(film => film.favorite)

    return (
        <div className="films-wrapper">
            {!favFilms.length && <span className='not-found'>No favorite films</span>}
            {favFilms.map(film => <RenderFilm oneFilm={film} key={film.id} />)}
        </div>
    )
}