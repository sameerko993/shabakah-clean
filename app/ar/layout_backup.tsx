import NavbarArabic from "../components/NavbarArabic";
import FooterArabic from "../components/FooterArabic";

export const metadata = {
  title: "شبكة - الموقع الشامل لكرة القدم",
  description: "نتائج المباريات، الترتيب، الأخبار، وتصنيفات FIFA.",
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarArabic />
      <main className="flex-1 p-4">{children}</main>
      <FooterArabic />
    </>
  );
}

