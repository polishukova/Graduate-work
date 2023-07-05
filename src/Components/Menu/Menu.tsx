import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../Store/store';
import { getPopularThunk, setFilms } from '../../Store/films';
import { getFilms } from '../Films/getFilms';

export const Menu = () => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <ul className='menu'>
                <Link to='/films' className='menu-item' onClick={() => {
                    getFilms().then((resp) => dispatch(setFilms(resp.results)))
                }}><HomeIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Home</p></Link>
                <Link to='/films' className='menu-item' onClick={() => {
                    dispatch(getPopularThunk())
                }}><LocalFireDepartmentIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Trends</p></Link>
                <li className='menu-item'><BookmarkIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Favorites</p></li>
                <li className='menu-item'><SettingsIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Settings</p></li>
            </ul>
        </div>
    )
}