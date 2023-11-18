import { EmailTemplate } from "../(function)/email-template/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(_req: Request) {
    const resend = new Resend('re_hVWB1Sn9_M4pZs5Ppe68dGuTfVNA7cHgd');
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["ims.system.ctpp@gmail.com"],
            subject: "Hello world",
            react: EmailTemplate({ firstName: "jesus" }),
            text: "Hello world from IMS System",
        });
        if (error) {
            return NextResponse.json({ error });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}