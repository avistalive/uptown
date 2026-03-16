'use client'

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect"
    asChild?: boolean;
    redirect?: string;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild,
    redirect
}: LoginButtonProps) => {


    const router = useRouter();
    const onClick = () => {
        router.push(redirect || "/auth/login")
    }

if(mode === "modal"){
    return(
        <span>
            TODO: Implement Modal
        </span>
    )
}
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};