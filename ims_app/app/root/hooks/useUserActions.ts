import { User } from "@/root/types";
import { startLogin, useAppDispatch } from "@/root/redux";


export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const loginUser = (email: string , password: string ) =>  {
		dispatch(startLogin(email,password))
	}



	return { loginUser };
};
