import { Route, Routes } from "react-router-dom"
import { Authorization } from "../Authorization/Authorization"
import { Registration } from "../Registration/Registration"
import { MainPage } from "../MainPage/MainPage"

export const Navigation = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path='auth' element={<Authorization />} />
                <Route path='reg' element={<Registration />} />
                <Route path='films/*' element={<MainPage />} />
            </Routes>
        </>
    )
}