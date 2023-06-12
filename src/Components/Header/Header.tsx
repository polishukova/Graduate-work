import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { User } from '../User/User'
import './Header.scss'

export const Header = () => {

    return (
        <div className='header-wrapper'>
                <Title />
                <Search/>
                <User/>
        </div>
    )
}