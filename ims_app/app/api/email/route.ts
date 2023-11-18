import { EmailTemplate } from "@/root/components";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
    console.log(process.env.RESEND_API_KEY);
    console.log('send email');
    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["ims.system.ctpp@gmail.com"],
            subject: "Hello world",
            react: EmailTemplate({ firstName: "jesus" }),
            text: "Hello world from IMS System",
        });
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}