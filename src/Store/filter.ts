import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { isTouched: boolean} = { isTouched: false}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleFilter: (state, action: PayloadAction<boolean>) => {
            state.isTouched=action.payload
        },
    }
})

export const { toggleFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer