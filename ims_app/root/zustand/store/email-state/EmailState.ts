import { emailProvider } from "@/root/zustand";
import { ims_request } from "@prisma/client";
import { create } from "zustand";
interface EmailState {
    sendEmail: (request:ims_request) => Promise<void>;
}
export const EmailStore = create<EmailState>((set, get) => {
    return {
        sendEmail: async (request:ims_request) => {
            await emailProvider.sendEmail(request);
        }
    };
});
export default EmailStore;