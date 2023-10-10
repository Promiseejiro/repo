import { NextRequest, NextResponse } from "next/server";
import Mailer from "../../utils/mailer";

export async function POST(req: Request, res: NextResponse) {
Mailer()
    return NextResponse.json([{ name: "John Doe" }]);
}
