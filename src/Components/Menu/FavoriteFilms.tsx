import { useAppDispatch, useAppSelector } from "../../Store/store"
import { RenderFilm } from "../Films/RenderFilm"
import { OneGenre } from "../../Server/getFilms"
import '..//Films/AllFilms.scss'
import { useEffect } from "react"
import { getFavoriteThunk } from "../../Store/films"

export const FavoriteFilms = () => {
    const films = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.genres.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.films.films.map(film => ({ ...film, genre: genresIdsToNames(film.genre_ids) }))
    })

    const dispatch = useAppDispatch()

    useEffect(() => {dispatch(getFavoriteThunk())}, [])

    return (
        <div className="films-wrapper">
            {!films.length && <span className='not-found'>No favorite films</span>}
            {films.map(film => <RenderFilm oneFilm={film} key={film.id} />)}
        </div>
    )
}