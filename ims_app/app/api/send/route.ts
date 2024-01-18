import { ims_request } from "@prisma/client";
import  EmailTemplate, { EmailTemplateProps }  from "../(function)/email-template/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailType } from "@/lib/definitions";
export async function POST(req: Request) {
    const body = await req.json() as EmailType;
    const resend = new Resend(process.env.RESEND_API_KEY as string);
    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["ims.system.ctpp@gmail.com"],
            subject: "Hello world",
            react: EmailTemplate({ request: body.request, user: body.user } as EmailTemplateProps),
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