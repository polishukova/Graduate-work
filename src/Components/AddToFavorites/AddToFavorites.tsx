import { useEffect, useState } from 'react';
import './AddToFavorites.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import { addFavorites, isFavorite } from '../../Server/addFavorites';

type Favorites = {
    filmId: number,
}

export const AddToFavorites = ({ filmId }: Favorites) => {
    const [isCopied, setIsCopied] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const [isFav, setIsFav] = useState(false)

    setTimeout(function () {
        setIsCopied(false);
        setIsAdded(false);
    }, 3000);

    useEffect(() => {
        isFavorite(filmId).then(resp => {
            resp === true ? setIsFav(false) : setIsFav(true)
        })
    }, [])

    const addFilm = {
        media_type: 'movie',
        media_id: filmId,
        favorite: isFav,
    }

    return (
        <>
            <button className="favorite-button" onClick={() => {
                setIsAdded(true)
                addFavorites(addFilm)
            }}><BookmarkIcon sx={{ color: "#AFB2B6", fontSize: 26 }} /></button>
            <button className="favorite-button" onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setIsCopied(true)
            }}><ShareIcon sx={{ color: "#AFB2B6", fontSize: 26 }} /></button>
            {isCopied && <p className='popup'>Copied</p>}
            {isAdded && <p className='popup'>Added</p>}
        </>
    )
}