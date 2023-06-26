import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { OneFilm } from "../Components/Films/getFilms"

const initialState: { films: OneFilm[]} = { films: []}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        },
    }
})

export const { setFilms } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer