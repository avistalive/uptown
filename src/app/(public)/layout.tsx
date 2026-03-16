import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <>
      <Navbar signButton />
      {children}
      <Footer />
    </>
  );
}

