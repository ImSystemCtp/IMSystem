import { User } from "@/app/root";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    userSelect: User;
}

const userInitialState: UserState = {
    userSelect: {} as User,
}

type UserSelectAction = {
    type: string;
    User?: UserState;
}

export type userSelectDispatch = (args: UserSelectAction) => UserSelectAction;

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<User>) => {
            return { ...state, userSelect: action.payload }
        }
    }

});

export const { setAuthUser } = userSlice.actions;
export const userReducer = userSlice.reducer;