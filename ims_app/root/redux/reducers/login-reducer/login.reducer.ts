import { User } from "@/app/root";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    userLogin: User;
}

export const userInitialState: LoginState = {
    userLogin: {} as User,
}

type UserLoginAction = {
    type: string;
    User?: LoginState;
}

export type userLoginDispatch = (args: UserLoginAction) => UserLoginAction;

export const loginSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setLoginUser: (state, action: PayloadAction<User>) => {
            return { ...state, userSelect: action.payload }
        }
    }

});

export const { setLoginUser } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;