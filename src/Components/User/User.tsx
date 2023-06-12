import { useAppSelector } from '../../Store/store';
import './User.scss'
import PersonIcon from '@mui/icons-material/Person';

export const User = () => {
    const username = useAppSelector(state => state.auth.userName)
    console.log("🚀 ~ file: User.tsx:7 ~ User ~ username:", username)
    // let username = ''
    if (username) {
        const nameSurnameArr = username.split(' ');
        const userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
        return (
            <div className='user-wrapper'>
                <p className='user-initials'>{userInitials}</p>
                <p className='user-name'>{username}</p>
            </div>
        )
    }
    else
        return (
            <div className='user-wrapper'>
                <PersonIcon sx={{ color: "#20B2AA", fontSize: 40}}/>
                <p className='user-name'>Sign in</p>
            </div>
        )

}