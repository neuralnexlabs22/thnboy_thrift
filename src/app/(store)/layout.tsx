import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StoreProvider } from "@/context/store-context";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </StoreProvider>
  );
}
