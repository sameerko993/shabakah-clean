import "../globals.css";
import NavbarArabic from "../components/NavbarArabic";
import FooterArabic from "../components/FooterArabic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شبكة - الأخبار، النتائج، الترتيب، تصنيفات FIFA",
  description: "منصتكم الشاملة لنتائج المباريات، الترتيب، الأخبار، وتصنيفات FIFA.",
};

// 🚨 isolate this layout from the English one
export const dynamic = "force-static";
export const revalidate = 0;
export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
        <NavbarArabic />
        <main className="flex-1 container mx-auto px-6 py-6">{children}</main>
        <FooterArabic />
      </body>
    </html>
  );
}
