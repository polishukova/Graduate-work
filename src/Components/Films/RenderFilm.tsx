import { useEffect, useState } from "react"
import { getGenres, OneFilm } from "./getFilms"
import './RenderFilm.scss'

const IMG = "https://image.tmdb.org/t/p/w500/"

export const RenderFilm = (props: { film: OneFilm }) => {
    // const { postId } = useParams()
    // const [onePost, setOnePost] = useState(props.post)
    // const theme = useContext(ThemeContext)

    // useEffect(() => {
    //     postId && getPost(postId).then(resp => setOnePost(resp))
    // }, [postId])

    // if (!onePost) return null

    
    // const [genre, setGenre] = useState()
    // useEffect(() => {getGenres().then((resp) => setGenre(resp))}, [])

    // const arr = []
    // console.log(genre)
    // genre.map(obj => {
    //     if (obj.id===props.film.genre_ids)
    // })

    return (
        <div className="films">
            <div className="films-img">
                <img src={IMG + props.film.poster_path} alt={'img'}></img>
            </div>
            <div className='films-info'>
                <h3 className="films-title">{props.film.title}</h3>
                <p className="films-genre">{
                }</p>
            </div>
        </div>
    )
}