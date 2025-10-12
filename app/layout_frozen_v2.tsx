import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shabakah - Live Football Hub",
  description:
    "Your ultimate hub for live scores, standings, news, and FIFA rankings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
