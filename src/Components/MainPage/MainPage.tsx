import { Route, Routes } from "react-router-dom"
import { AllFilms } from "../Films/AllFilms"
import { Header } from "../Header/Header"
import { Menu } from "../Menu/Menu"
import './MainPage.scss'
import { RenderOneFilm } from "../Films/OneFilm"
import { FavoriteFilms } from "../Menu/FavoriteFilms"
import { PopularFilms } from "../Menu/PopularFilms"
import { Filter } from "../Filter/Filter"
import { useState } from "react"

export const MainPage = () => {
    const [showMenu, setShowMenu] = useState(true)

    const onBurgerButtonClick = (isTouched: boolean) => {
        setShowMenu(isTouched)
    }
    return (
        <>
            <Header touched handleClick={onBurgerButtonClick} />
            <div className='container main-wrapper'>
                <div className='main-menu'>
                    {showMenu && <Menu />}
                </div>
                <div className='main-films'>
                    <Routes>
                        <Route index element={<AllFilms />} />
                        <Route path=':filmId' element={<RenderOneFilm />} />
                        <Route path='favorite' element={<FavoriteFilms />} />
                        <Route path='popular' element={<PopularFilms />} />
                    </Routes>
                </div>
            </div>
            <Filter />
        </>
    )
}