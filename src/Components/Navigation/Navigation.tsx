import { Route, Routes } from "react-router-dom"
import { Authorization } from "../Authorization/Authorization"
import { Registration } from "../Registration/Registration"
import "./Navigation.css"

export const Navigation = () => {


    return (
        <div className='wrapper'>
            <div className='container'>
                <Routes>
                    <Route index path='Auth' element={<Authorization />} />
                    <Route path='Reg' element={<Registration/>} />
                </Routes>
            </div>
        </div>
    )
}