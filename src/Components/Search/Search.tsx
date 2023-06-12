import './Search.scss'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <div className='search-wrapper'>
            <input className='search-input' type='search' placeholder="Search..." ></input>
            <button className='search-button'>
                <SearchIcon sx={{ color: "#20B2AA", fontSize: 30}}/>
            </button>
        </div>
    )
}