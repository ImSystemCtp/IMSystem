import { emailProvider } from "@/root/zustand";
import { create } from "zustand";
interface EmailState {
    sendEmail: () => Promise<void>;
}
export const EmailStore = create<EmailState>((set, get) => {
    return {
        sendEmail: async () => {
            console.log('send email');
            await emailProvider.sendEmail();
        }
    };
});
export default EmailStore;