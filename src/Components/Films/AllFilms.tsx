import { useEffect, useState } from 'react'
import './AllFilms.css'
import { OneFilm, getFilms } from './getFilms'
import { RenderFilm } from './RenderFilm'

export const AllFilms = () => {
    const [films, setFilms] = useState<OneFilm[]>([])

    useEffect(() => {getFilms().then((resp) => setFilms(resp))}, [])

    return (
        <div className="films-wrapper">
        {films.map(film => <RenderFilm film={film} key={film.id} />)	 }
        </div>
    )
}