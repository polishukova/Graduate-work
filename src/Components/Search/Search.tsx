import { useState } from 'react';
import { setSearch } from '../../Store/search';
import { useAppDispatch } from '../../Store/store';
import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    const [searchResult, setSearchResult] = useState('')
    const dispatch = useAppDispatch()

    return (
        <div className='search-wrapper'>
            <input className='search-input' type='search' placeholder="Search..." value={searchResult} onChange={(e) => setSearchResult(e.target.value)}></input>
            <button className='search-button' onClick={() => dispatch(setSearch(searchResult))}>
                <SearchIcon sx={{ color: "#20B2AA", fontSize: 30 }} />
            </button>
        </div>
    )
}