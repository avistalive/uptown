import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { auth } from "@/auth";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({
  children,
}: PublicLayoutProps) {
  const session = await auth();

  return (
    <>
      <Navbar signButton={!session} />
      {children}
      <Footer />
    </>
  );
}

