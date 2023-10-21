import { registerGood,  } from "@/root/types";
import { transferProvider } from "@/root/zustand";
import { ims_assets, ims_register } from "@prisma/client";
import { create } from "zustand";
interface registerTransferState {
    register: ims_register;
    assets: ims_assets[];
    addRegisterTransfer: ( registerLow: registerGood) => Promise<void>;
}
export const useRegisterTransferStore = create<registerTransferState>((set) => {
    return {
        register: {} as ims_register,
        assets: [],
        addRegisterTransfer: async ( register: registerGood) => {
            console.log(register);
            const newRegisterTransfer = await transferProvider.createTransfer(register);
        },
    };
});
export default useRegisterTransferStore;