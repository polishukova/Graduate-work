import { OneFilmWithGenre } from "../../Server/getFilms"
import './RenderFilm.scss'
import { Link } from "react-router-dom"

export const IMG = "https://image.tmdb.org/t/p/w500/"

export const RenderFilm = ({ oneFilm }: { oneFilm?: OneFilmWithGenre }) => {

    const genres = oneFilm?.genre.join(' · ')

    const RatingFilm = (rating: number) => {
        let newRating = +rating.toFixed(1);
        if (newRating < 5) return <div className="films-rating low-rating">{newRating}</div>
        if (newRating >= 5 && newRating <= 7) return <div className="films-rating middle-rating">{newRating}</div>
        if (newRating > 7) return <div className="films-rating hight-rating">{newRating}</div>
    }

    if (!oneFilm) return null

    return (
        <div className="films">
            <>{RatingFilm(oneFilm.vote_average)}</>
            <Link to={'/films/' + oneFilm.id}>
                <div className="films-img">
                    <img src={IMG + oneFilm.poster_path} alt={'img'}></img>
                </div>
                <div className='films-info'>
                    <h3 className="films-title">{oneFilm.title}</h3>
                    <p className="films-genre">{genres}</p>
                </div>
            </Link>
        </div>
    )
}