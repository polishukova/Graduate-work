import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux/es/exports'
import { authReducer } from './auth'
import { filmsReducer } from './films'
import { genresReducer } from './genres'
import { filterReducer } from './filter'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        films: filmsReducer,
        genres: genresReducer,
        filter: filterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector