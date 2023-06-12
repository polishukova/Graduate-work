import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Auth = {
    userName: string,
    userEmail: string,
    userPassword: string,
}

const initialState: Auth = {
    userName: '',
    userEmail: '',
    userPassword: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
			state.userName = action.payload
            console.log(state.userName)
		},
        setUserEmail: (state, action: PayloadAction<string>) => {
			state.userEmail = action.payload
		},
        setUserPassword: (state, action: PayloadAction<string>) => {
			state.userPassword = action.payload
		},

    }
})

export const { setUserName, setUserEmail, setUserPassword } = authSlice.actions
export const authReducer = authSlice.reducer