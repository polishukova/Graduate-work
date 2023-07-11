import { toggleFavoritesFilm } from '../../Store/films';
import { useAppDispatch } from '../../Store/store'
import './AddToFavorites.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

type Favorites = {
    filmId: number,
}

export const AddToFavorites = ({ filmId }: Favorites) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <button className="favorite-button" onClick={() => dispatch(toggleFavoritesFilm(filmId))}><BookmarkIcon sx={{ color: "#AFB2B6", fontSize: 26 }} /></button>
            <button className="favorite-button"><ShareIcon sx={{ color: "#AFB2B6", fontSize: 26 }} /></button>
        </>
    )
}