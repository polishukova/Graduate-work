import './Menu.scss'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';

export const Menu = () => {
    return (
        <div>
            <ul className='menu'>
                <li className='menu-item'><HomeIcon sx={{ color: "#20B2AA", fontSize: 26}}/><p>Home</p></li>
                <li className='menu-item'><LocalFireDepartmentIcon sx={{ color: "#20B2AA", fontSize: 26}}/><p>Trends</p></li>
                <li className='menu-item'><BookmarkIcon sx={{ color: "#20B2AA", fontSize: 26}}/><p>Favorites</p></li>
                <li className='menu-item'><SettingsIcon sx={{ color: "#20B2AA", fontSize: 26}}/><p>Settings</p></li>
            </ul>
        </div>
    )
}