import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export const Menu = () => {

    return (
        <div>
            <ul className='menu'>
                <Link to='/films' className='menu-item'><HomeIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Home</p></Link>
                <Link to='/popular' className='menu-item'><LocalFireDepartmentIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Trends</p></Link>
                <Link to='/favorite' className='menu-item'><BookmarkIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Favorites</p></Link>
                <li className='menu-item'><SettingsIcon sx={{ color: "#20B2AA", fontSize: 26 }} /><p>Settings</p></li>
            </ul>
        </div>
    )
}