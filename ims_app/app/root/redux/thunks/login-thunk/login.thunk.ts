import { loginProvider } from "@/root/redux/provider";
import { User } from "@/root/types";
import { setLoginUser, userLoginDispatch } from "@/root/redux/reducers";

export const startLogin = (email: string, password: string): any => {
    return async (dispatch: userLoginDispatch ) => {
            const loginUser: User = await loginProvider.login(email, password);
            dispatch(setLoginUser(loginUser));
    };
};
