import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import ProfileClient from "./ProfileClient";

const ProfilePage = async () => {
    const session = await auth();
    const userId = session?.user?.id;

    let user = null;
    if (userId) {
        user = await getUserById(userId);
    }

    // Convert decimal or other Prisma types to plain objects for client component if necessary
    const serializedUser = user ? {
        id: user.id,
        name: user.name || "",
        email: user.email || "",
        role: user.role,
        isTwoFactorEnabled: user.isTwoFactorEnabled,
    } : undefined;

    return (
        <ProfileClient user={serializedUser} />
    );
};

export default ProfilePage;
