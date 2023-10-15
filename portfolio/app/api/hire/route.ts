import { NextRequest, NextResponse } from "next/server";
import Mailer from "../../utils/mailer";

export async function POST(req: Request, res: NextResponse) {
const body =await req.json()
// console.log(body.message.email,body.message.name,body.message.message)
try{
    const {email,name,message} = body.message
 Mailer(email,`<div>
 <p>email:${email}</p>
 <p>name:${name}</p>
 <p>message:${message}</p>
 
 </div>`)
    return NextResponse.json({ message: "Message sent successfully" });
}catch(error:any){

    return NextResponse.json({ message: "Error occured" });
}
}
