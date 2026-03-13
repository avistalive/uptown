"use server";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
    if(!token){
        return { error : "Token is missing!"}
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if(!validatedFields.success){
        return {error : "Invalid Fields"}
    }
    
    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);
    if(!existingToken){
        return {error : "Invalid token!"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired){
        return { error : "Token is no longer active!"}
    }

    const existingUser = await db.user.findUnique({
        where: { email: existingToken.email },
        select: { id: true }
    });

    if(!existingUser){
        return { error : "Email does not exists!"}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where : {
            id: existingUser.id
        },
        data : {
            password: hashedPassword
        }
    })
    
    return { success : "Password Updated!"}
};
