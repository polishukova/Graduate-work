import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { OneGenre } from "../Server/getFilms"

const initialState: { genres: OneGenre[] } = { genres: [] }

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<OneGenre[]>) => {
            state.genres = action.payload
        },
    }
})

export const { setGenres } = genresSlice.actions
export const genresReducer = genresSlice.reducer