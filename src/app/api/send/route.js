import { EmailTemplate } from "@components-home/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { nombre, email, mensaje } = await req.json();
      const emailContent = (
        <EmailTemplate nombre={nombre} email={email} mensaje={mensaje} />
      );
      const data = await resend.emails.send({
        from: "FAB-LAB <onboarding@resend.dev>",
        to: ["vichevasquez@gmail.com", "cicchelli.camilo@gmail.com"],
        subject: "Hello world",
        react: emailContent,
        text: "",
      });
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error });
    }
  } else {
    return NextResponse.forbidden("Metodo no permitido");
  }
}
