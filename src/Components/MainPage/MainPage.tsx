import { Route, Routes } from "react-router-dom"
import { AllFilms } from "../Films/AllFilms"
import { Header } from "../Header/Header"
import { Menu } from "../Menu/Menu"
import './MainPage.scss'
import { RenderOneFilm } from "../Films/OneFilm"

export const MainPage = () => {
    return (
        <>
            <Header />
            <div className='container main-wrapper'>
                <div className='main-menu'>
                    <Menu />
                </div>
                <div className='main-films'>
                    <Routes>
                        <Route index element={<AllFilms />} />
                        <Route path=':filmId' element={<RenderOneFilm />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}