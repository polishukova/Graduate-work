import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFavoriteFilms, getFilms, getFilmsBySearch, getPopularFilms, OneFilm } from "../Server/getFilms"

const initialState: { films: OneFilm[] } = { films: [] }

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
            .addCase(getPopularThunk.fulfilled, (state, action: PayloadAction<OneFilm[]>) => {
                state.films = action.payload
            })
            .addCase(getFavoriteThunk.fulfilled, (state, action: PayloadAction<OneFilm[]>) => {
                state.films = action.payload
            })
    },
})

export const { setFilms } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer

export const getFilmsThunk = createAsyncThunk(
    "films/getFilms",
    async ({ search = '' }: { search?: string }) => {
        const films: OneFilm[] = search ? await getFilmsBySearch({ 'search': search }) : (await getFilms()).results;
        return films;
    }
);

export const getPopularThunk = createAsyncThunk(
    "films/getPopularFilms",
    async () => {
        const films: OneFilm[] = await getPopularFilms();
        return films;
    }
);

export const getFavoriteThunk = createAsyncThunk(
    "films/getFavoriteFilms",
    async () => {
        const films: OneFilm[] = await getFavoriteFilms();
        return films;
    }
);