"use server"

import * as z from "zod"

import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { sendPasswordResentEmail } from "@/lib/mail"
import { generatePasswordResetToken } from "@/lib/token"


export const reset = async(values : z.infer<typeof ResetSchema> )=> {
    const validatedFields = ResetSchema.safeParse(values)

    if(!validatedFields.success){
        return{error : "Invalud email!"}
    }

    const {email} = validatedFields.data

    const existingUser = await getUserByEmail(email);

    if(!existingUser){
return { error : "Email not found!"}
    }

    //Todo Generate token and send

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResentEmail(
        passwordResetToken.email,
        passwordResetToken.token,
    )
    return {success : "Reset email sent!"}
}