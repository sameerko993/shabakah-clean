"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Shabakah
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/matches" className="hover:text-yellow-400">Matches</Link>
          <Link href="/standings" className="hover:text-yellow-400">Standings</Link>
          <Link href="/news" className="hover:text-yellow-400">News</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-yellow-500 text-black rounded">EN</button>
          <button className="px-3 py-1 bg-gray-700 rounded">AR</button>
        </div>
      </div>
    </header>
  );
}
