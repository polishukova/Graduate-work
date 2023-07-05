import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFilmsBySearch, getPopularFilms, OneFilm, OneFilmWithFavorite } from "../Components/Films/getFilms"

const initialState: { films: OneFilm[] } = { films: [] }

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        },
        toggleFavoritesFilm: (state, action: PayloadAction<number>) => {
            const film = state.films.find(film => film.id===action.payload)
            if(!film) return
            film.favorite = !film.favorite
        }
    },
    extraReducers(builder) {
        builder.addCase(getFilmsThunk.fulfilled, (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        })
        .addCase(getPopularThunk.fulfilled, (state, action: PayloadAction<OneFilm[]>) => {
            state.films = action.payload
        })
    },
})

export const { setFilms } = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer

export const getFilmsThunk = createAsyncThunk(
    "films/getFilms",
    async ({ search = '' }: { search?: string }) => {
        const films: OneFilm[] = await getFilmsBySearch({ 'search': search });
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