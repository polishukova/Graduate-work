import { useState } from 'react';
import { useAppDispatch } from '../../Store/store';
import './Search.scss'
import { getFilmsThunk } from '../../Store/films';
import SortIcon from '@mui/icons-material/Sort';
import { toggleFilter } from '../../Store/filter';

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')
    const dispatch = useAppDispatch()

    return (
        <div className='search-wrapper'>
            <input className='search-input' type='search' placeholder="Search..." value={searchResult} onChange={(e) => {
                setSearchResult(e.currentTarget.value)
                dispatch(getFilmsThunk({ search: e.currentTarget.value }))
            }}></input>
            <button className='sort-button' onClick={() => {
                dispatch(toggleFilter(true))
            }}>
                <SortIcon sx={{ color: "#20B2AA", fontSize: 30 }} />
            </button>
        </div>
    )
}