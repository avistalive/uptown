import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-300">
      <div className="space-y-6 text-center">
        <h1
          className="text-6xl font-semibold text-white drop-shadow-md"
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple Auth Service</p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
