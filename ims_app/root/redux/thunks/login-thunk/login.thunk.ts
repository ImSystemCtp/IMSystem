import { User, loginProvider } from "@/app/root";
import { setLoginUser, userLoginDispatch } from "../../reducers";
/*
export const startLogin = (email: string, password: string): any => {
    return async (dispatch: userLoginDispatch ) => {
            const loginUser: User = await loginProvider.login(email, password);
            dispatch(setLoginUser(loginUser));
    };
};*/