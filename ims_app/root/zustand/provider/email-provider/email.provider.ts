import axios from "axios";

const sendEmail = async () => {
    console.log('send email2222');
    const response = await axios.post('/api/email');
    return response.data;
}
export const emailProvider = {
    sendEmail
}