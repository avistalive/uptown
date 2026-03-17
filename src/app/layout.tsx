import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Merge Lenis with GSAP
  gsap.ticker.add((time) => {
    ScrollTrigger.update();
  });
  
  gsap.ticker.lagSmoothing(0);
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const ivyPrestoThin = localFont({
  src: "../../public/fonts/ivy-presto-thin.otf",
  variable: "--font-ivy-presto",
  display: 'swap',
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Uptown",
  description: "Uptown is a Navi Mumbai-based Proptech company specializing in mandate/sole-selling services, dedicated to transforming real estate marketing and sales for developers.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased font-poppins",
          poppins.variable,
          ivyPrestoThin.variable
        )}
      >
        <SessionProvider session={session}>

          <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
            <main>{children}</main>
          </ReactLenis>

          <Toaster richColors />
        </SessionProvider>
      </body>
    </html>
  );
}

