import { useState } from 'react';
import { useAppDispatch } from '../../Store/store';
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';
import { getFilmsThunk } from '../../Store/films';

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')
    const dispatch = useAppDispatch()

    // if (searchResult === '') return

    return (
        <div className='search-wrapper'>
            <input className='search-input' type='search' placeholder="Search..." value={searchResult} onChange={(e) => {
                setSearchResult(e.currentTarget.value)
                dispatch(getFilmsThunk({ search: e.currentTarget.value }))
            }}></input>
            <button className='search-button' onClick={() => dispatch(getFilmsThunk({ search: searchResult }))}>
                <SearchIcon sx={{ color: "#20B2AA", fontSize: 30 }} />
            </button>
        </div>
    )
}