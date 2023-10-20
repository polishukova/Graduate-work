import { useAppDispatch, useAppSelector } from "../../Store/store"
import { RenderFilm } from "../Films/RenderFilm"
import { OneGenre } from "../../Server/getFilms"
import '..//Films/AllFilms.scss'
import { getPopularThunk } from "../../Store/films"
import { useEffect } from "react"

export const PopularFilms = () => {
    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(getPopularThunk()) }, [])

    const films = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.genres.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.films.films.map(film => ({ ...film, genre: genresIdsToNames(film.genre_ids) }))
    })

    return (
        <div className="films-wrapper">
            {films.map(film => <RenderFilm oneFilm={film} key={film.id} />)}
        </div>
    )
}