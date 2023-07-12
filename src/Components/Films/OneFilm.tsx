import { useParams } from "react-router-dom"
import { IMG } from "./RenderFilm"
import { useEffect, useState } from "react"
import { FilmForSinglePage, getFilm } from "./getFilms"
import './OneFilm.scss'
import { AddToFavorites } from "../AddToFavorites/AddToFavorites"


export const RenderOneFilm = () => {
    const [oneFilm, setOneFilm] = useState<FilmForSinglePage>()
    const { filmId } = useParams()

    useEffect(() => {
        filmId && getFilm(filmId).then(resp => setOneFilm(resp))
    }, [filmId])

    const genres = oneFilm?.genres.map(genre => genre.name).join(' · ')

    const RatingFilm = (rating: number) => {
        let newRating = +rating.toFixed(1);
        if (newRating < 5) return <div className="one-film__rating low-rating">{newRating}</div>
        if (newRating >= 5 && newRating <= 7) return <div className="one-film__rating middle-rating">{newRating}</div>
        if (newRating > 7) return <div className="one-film__rating hight-rating">{newRating}</div>
    }

    if (!oneFilm?.release_date) return null
    const ms = Date.parse(oneFilm?.release_date);
    const newDate = (new Date(ms)).toISOString()
        .replace(/^([^T]+)T(.+)$/, '$1')
        .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')

    console.log(oneFilm.release_date)

    const countries = oneFilm.production_countries.map(country => country.name).join(', ')

    const companies = oneFilm.production_companies.map(company => company.name).join(', ')

    if (!oneFilm) return null

    return (
        <div className="one-film__wrapper">
            <div className="one-film">
                <div className="one-film__img">
                    <img src={IMG + oneFilm.poster_path} alt={'img'}></img>
                </div>
                <div className="one-film__favorites">
                    <AddToFavorites filmId={oneFilm.id} />
                </div>
            </div>
            <div className="one-film__info">
                <p className="one-film__genres">{genres}</p>
                <h2 className="one-film__title">{oneFilm.title}</h2>
                <div className="one-film__ratings">
                    {RatingFilm(oneFilm.vote_average)}
                    <div className="one-film__rating-imdb">IMDb {oneFilm.vote_average.toFixed(1)}</div>
                    <div className="one-film__runtime">{oneFilm.runtime + ' min'}</div>
                </div>
                <p className="one-film__overview">{oneFilm.overview}</p>
                <table className="one-film__table">
                    <tr className="one-film__tr">
                        <td>Released:</td>
                        <td>{newDate}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Budget:</td>
                        <td>{oneFilm.budget + ' $'}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Country:</td>
                        <td>{countries}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Production:</td>
                        <td>{companies}</td>
                    </tr>
                    <tr className="one-film__tr">
                        <td>Tagline:</td>
                        <td>{oneFilm.tagline}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}