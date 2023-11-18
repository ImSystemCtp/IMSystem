import { EmailTemplate } from "@/root/components";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(_req: Request) {
    const resend = new Resend('re_hVWB1Sn9_M4pZs5Ppe68dGuTfVNA7cHgd');
    console.log(process.env.RESEND_API_KEY);
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
        console.log('error');
        return NextResponse.json({ error });
    }
}