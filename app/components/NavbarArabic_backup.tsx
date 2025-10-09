"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarArabic() {
  const pathname = usePathname();

  const navItems = [
    { href: "/ar", label: "الرئيسية" },
    { href: "/matches", label: "المباريات" },
    { href: "/standings", label: "الترتيب" },
    { href: "/rankings", label: "التصنيف" },
    { href: "/news", label: "الأخبار" },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        شبكة
      </Link>
      <div className="flex space-x-6 rtl:space-x-reverse">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-yellow-400 ${
              pathname === item.href ? "text-yellow-400" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/" className="text-sm hover:text-yellow-400">
        EN
      </Link>
    </nav>
  );
}
