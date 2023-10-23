import { useEffect } from 'react'
import './AllFilms.scss'
import { OneGenre, getFilms, getGenres } from '../../Server/getFilms'
import { RenderFilm } from './RenderFilm'
import { useAppDispatch, useAppSelector } from '../../Store/store'
import { setFilms } from '../../Store/films'
import { setGenres } from '../../Store/genres'
import { ShowMore } from '../ShowMore/ShowMore'

export const AllFilms = () => {
    const filmsList = useAppSelector(state => {
        const genresIdsToNames = (genresIds: number[]) => genresIds.map(genreIdToName);
        const genres: OneGenre[] = state.genres.genres
        const genreIdToName = (genreId: number) => genres.find(({ id }) => id === genreId)?.name
        return state.films.films.map(film => ({ ...film, genre: genresIdsToNames(film.genre_ids) }))
    })

    const dispatch = useAppDispatch()

    useEffect(() => { getFilms().then((resp) => {
        console.log(filmsList)
        dispatch(setFilms(resp.results))}
        ) }, [])

    useEffect(() => { getGenres().then((resp) => dispatch(setGenres(resp))) }, [])

    return (
        <>
            <div className="films-wrapper">
                {!filmsList.length && <span className='not-found'>Not found</span>}
                {filmsList.map(film => <RenderFilm oneFilm={film} key={film.id} />)}
            </div>
            <div className='show-more-wrapper'>
                <ShowMore />
            </div>
        </>
    )
}