import { AllFilms } from "../Films/AllFilms"
import { Header } from "../Header/Header"
import { Menu } from "../Menu/Menu"
import './MainPage.scss'

export const MainPage = () => {
    return (
        <>
            <Header />
            <div className='container main-wrapper'>
                    <div className='main-menu'>
                        <Menu />
                    </div>
                    <div className='main-films'>
                        <AllFilms />
                    </div>
                </div>
        </>
    )
}