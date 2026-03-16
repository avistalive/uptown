interface PublicLayoutProps {
  children: React.ReactNode;
}

export default async function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <div className="h-full bg-sky-300">
      {children}
    </div>
  );
}
