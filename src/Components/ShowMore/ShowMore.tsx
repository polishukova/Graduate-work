import { useState } from "react"
import { getFilms } from "../Films/getFilms"
import './ShowMore.scss'
import CircularProgress from "@mui/material/CircularProgress"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import { setFilms } from "../../Store/films"

export const ShowMore = () => {
    const [page, setPage] = useState<number>(1)

    const films = useAppSelector(store => store.films.films)
    const dispatch = useAppDispatch()

    return (
        <button className='show-more' onClick={() => { 
            getFilms(page).then(resp => dispatch(setFilms([...films, ...resp.results])))
            setPage(page + 1) 
            }}>
            <span className="show-more-text">Show more</span><CircularProgress size={15} sx={{ color: "#20B2AA", size: 10 }} />
        </button>
    )
}