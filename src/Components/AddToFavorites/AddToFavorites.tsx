import { useState } from 'react';
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
    const [isCopied, setIsCopied] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    setTimeout(function(){
        setIsCopied(false);
        setIsAdded(false);
    }, 3000);

    return (
        <>
            <button className="favorite-button" onClick={() => {
                dispatch(toggleFavoritesFilm(filmId))
                setIsAdded(true)
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