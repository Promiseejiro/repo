import { NextRequest,NextResponse } from "next/server"

export async function GET(req: Request,res: Response) {
  console.log("hey")
return  NextResponse.json([{ name: 'John Doe' }])
}