import "./globals.css";
import Navbar from "../components/Navbar";
import NavbarArabic from "../components/NavbarArabic";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isArabic = false;

  return (
    <html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"}>
      <body className="flex flex-col min-h-screen bg-gray-100 font-sans">
        {isArabic ? <NavbarArabic /> : <Navbar />}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
