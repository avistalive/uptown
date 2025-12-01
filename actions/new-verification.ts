'use server'

// import { getUserByEmail } from "@/data/user"
// import { getVerificationTokenByEmail } from "@/data/verification-token"
import { db } from "@/lib/db"

interface VerificationResponse {
  error?: string;
  success?: string;
}

export const newVerification = async (token: string): Promise<VerificationResponse> => {
  try {
    if (!token) {
      return { error: "Token is required!" };
    }

    // Get the verification token
    const existingToken = await db.verificationToken.findUnique({
      where: { token }
    });

    if (!existingToken) {
      return { error: "Token does not exist!" };
    }

    // Check token expiration
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      // Clean up expired token
      await db.verificationToken.delete({
        where: { id: existingToken.id }
      });
      return { error: "Token has expired!" };
    }

    // Get the user
    const existingUser = await db.user.findUnique({
      where: { email: existingToken.email }
    });

    if (!existingUser) {
      return { error: "Email does not exist!" };
    }

    // Update user and delete token in a transaction
    await db.$transaction([
      // Update user
      db.user.update({
        where: { id: existingUser.id },
        data: {
          emailVerified: new Date(),
          email: existingToken.email
        }
      }),
      // Delete verification token
      db.verificationToken.delete({
        where: { id: existingToken.id }
      })
    ]);

    return { success: "Email verified successfully!" };
  } catch (error) {
    console.error("Error during email verification:", error);
    return { error: "Failed to verify email. Please try again." };
  }
}