import { useState } from 'react'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { User } from '../User/User'
import './Header.scss'

type Props = {
    touched?: boolean,
    handleClick: (isTouched: boolean) => void
}

export const Header = ({ touched, handleClick }: Props) => {
    const [isTouched, setIsTouched] = useState(touched)

    const click = () => {
        setIsTouched(!isTouched)
        handleClick(!!isTouched)
    }

    return (
        <div className='header-wrapper'>
            <Title />
            <Search />
            <User />
            <button className='header-button' onClick={click}>
                {isTouched ? <>
                    <hr className='header-span'></hr>
                    <hr className='header-span'></hr>
                    <hr className='header-span'></hr></> :
                    <span className='header-close-span'>✖</span>}
            </button>
        </div>
    )
}