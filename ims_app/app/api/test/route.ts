import { currentUser } from "@clerk/nextjs";


export async function GET() {

    const user = currentUser()

}