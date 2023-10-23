{/*import { useDetailsRequestStore,useLoadingStore } from "@/root/zustand";
import { useEffect } from "react";
export const useDetailsRequestByRequestId= (idRequest:string) => {
    const getDetails = useDetailsRequestStore(state => state.getDetailsRequestByRequestId(idRequest))!;;
    useEffect(() => {
        async function checkDetailsChanges() {
            const details = await getDetails();
            if (details !== undefined ) {
                useLoadingStore.getState().setIsLoading(false);
            }
        }
        checkDetailsChanges();
    }, [getDetails]);
}*/}