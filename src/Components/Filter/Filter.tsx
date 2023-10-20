import { SetStateAction, useEffect, useState } from "react"
import { toggleFilter } from "../../Store/filter"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import './Filter.scss'
import { setFilms } from "../../Store/films"
import { FormControl, Select, MenuItem } from "@mui/material"
import { getFilms } from "../../Server/getFilms"

export const Filter = () => {
    const isTouched = useAppSelector(state => state.filter.isTouched)
    const dispatch = useAppDispatch()

    const films = useAppSelector(state => state.films.films)

    const filmsArr = films.slice(0)
    const sortByRating = filmsArr.sort((a, b) => b.vote_average - a.vote_average)

    const sortByYear = filmsArr.sort((a, b) => {
        const result = +(b.release_date.slice(0, 4)) - +(a.release_date.slice(0, 4))
        return result
    })

    const genres = useAppSelector(state => state.genres.genres)

    const genresList = genres.map(genre => {
        return <MenuItem value={genre.id} key={genre.id}>{genre.name}</MenuItem>
    })

    const styles = {
        border: '1px solid #323537',
        borderRadius: '10px',
        fontSize: '14px',
        color: '#80858B',
    }

    const [genre, setGenre] = useState('');
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setGenre(event.target.value);
    }

    useEffect(() => { getFilms(page, genre, sortBy).then((resp) => dispatch(setFilms(resp.results))) }, [genre, sortBy])

    const filtredFilmsArr = films.filter(film => film.genre_ids.includes(+genre))

    return (
        <>
            <div className={isTouched ? 'show-filter' : 'hide-filter'}>
                <div className="filter-title">
                    <h3>Filters</h3>
                    <button className="filter-close-button" onClick={() => { dispatch(toggleFilter(false)) }}>✖</button>
                </div>
                <div className="filter-sort-by">
                    <p>Sort by</p>
                    <div className="filter-button-wrapper">
                        <button className="filter-sort-button" onClick={() => dispatch(setFilms(sortByRating))}>Rating</button>
                        <button className="filter-sort-button" onClick={() => dispatch(setFilms(sortByYear))}>Year</button>
                    </div>
                    <p>Sort all films by rating</p>
                    <div className="filter-button-wrapper">
                        <button className="filter-sort-button" onClick={() => setSortBy('vote_average.desc')}>⬆️</button>
                        <button className="filter-sort-button" onClick={() => setSortBy('vote_average.asc')}>⬇️</button>
                    </div>
                    <p>Sort all films by year</p>
                    <div className="filter-button-wrapper">
                        <button className="filter-sort-button" onClick={() => setSortBy('primary_release_date.desc')}>⬆️</button>
                        <button className="filter-sort-button" onClick={() => setSortBy('primary_release_date.asc')}>⬇️</button>
                    </div>
                    <p>Genres</p>
                    <div className="filter-by-genres">
                        <FormControl fullWidth>
                            <Select sx={styles} value={genre} onChange={handleChange} displayEmpty>
                                <MenuItem disabled value="">
                                    <em>Select genre</em>
                                </MenuItem>
                                {genresList}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <button className="button-show-results" onClick={() => dispatch(setFilms(filtredFilmsArr))}>Show Results</button>
            </div>
        </>
    )
}