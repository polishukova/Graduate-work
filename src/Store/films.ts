import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFilmsBySearch, OneFilm } from "../Components/Films/getFilms"
import { RootState, store } from "./store"

const initialState: { films: OneFilm[]} = { films: []}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(getFilmsThunk.fulfilled, (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        })
    },
})

export const { setFilms } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer

export const getFilmsThunk = createAsyncThunk<OneFilm[], {search?:string}, {state: RootState}>('films/getFilms', async ({search = ''}, store) => {
    const state = store.getState()
    const films = await getFilmsBySearch({'search': search})
    return films
})