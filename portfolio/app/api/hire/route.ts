import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request, res: NextResponse) {
  if (req.method === "POST") {
    const data = await req.json();
    // console.log(process.env['email']);
    // console.log(process.env.email);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:'promiseejiro43@gmail.com',
        pass: 'gufmbtoghpjswmye',
      },
    });
    const message = await {
      from:'promiseejiro43@gmail.com',
      to: `promiseemosivbe43@gmail.com`,
      subject:'Message from portfolio',
      html: `<h1>${data.message.email} ${data.message.message} ${data.message.email}</h1>`,
    };

    transporter.sendMail(message, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("message has been sent to this email");
      }
    });

    return NextResponse.json([{ name: "John Doe" }]);
  } else {
    console.log("not a post request");
  }
}
