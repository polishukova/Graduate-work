import { useEffect, useState } from "react"
import { getFilms } from "../../Server/getFilms"
import './ShowMore.scss'
import CircularProgress from "@mui/material/CircularProgress"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { setFilms } from "../../Store/films"

export const ShowMore = () => {
    const [page, setPage] = useState<number>(1)

    const films = useAppSelector(store => store.films.films)
    const dispatch = useAppDispatch()

useEffect(() => {getFilms(page).then(resp => dispatch(setFilms([...films, ...resp.results])))}, [page])

    return (
        <button className='show-more' onClick={() => {
            setPage(page + 1)
        }}>
            <span className="show-more-text">Show more</span><CircularProgress size={15} sx={{ color: "#20B2AA", size: 10 }} />
        </button>
    )
}