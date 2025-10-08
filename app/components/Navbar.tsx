"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  return (
    <nav className="flex items-center justify-between bg-black text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/shabakah_logo_clean.png" alt="Shabakah" width={40} height={40} />
        <span className="font-bold text-xl">Shabakah</span>
      </Link>

      {/* Navigation */}
      <div className="flex gap-6">
        <Link href="/matches">Matches</Link>
        <Link href="/standings">Standings</Link>
        <Link href="/rankings">Rankings</Link>
        <Link href="/news">News</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/store">Store</Link>
        <Link href="/sponsors">Sponsors</Link>
      </div>

      {/* Language Switch */}
      <button
        onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
        className="bg-white text-black px-3 py-1 rounded"
      >
        {lang}
      </button>
    </nav>
  );
}
