"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavbarArabic() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-3" dir="rtl">
      {/* Logo on the right for Arabic */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="شَبَكة" width={40} height={40} />
        <span className="font-bold text-xl">شَبَكة</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/ar" className="hover:underline">الرئيسية</Link>
        <Link href="/ar/standings" className="hover:underline">الترتيب</Link>
        <Link href="/ar/scores" className="hover:underline">النتائج</Link>
        <Link href="/ar/ranking" className="hover:underline">التصنيف</Link>
        <Link href="/ar/news" className="hover:underline">الأخبار</Link>
        <Link href="/ar/tickets" className="hover:underline">التذاكر</Link>
        <Link href="/ar/store" className="hover:underline">المتجر</Link>
      </div>

      {/* Language Switch */}
      <div className="flex space-x-4">
        <Link href="/" className="hover:underline">English</Link>
        <Link href="/ar" className="hover:underline font-bold">العربية</Link>
      </div>
    </nav>
  );
}
