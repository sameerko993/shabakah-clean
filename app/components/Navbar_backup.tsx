"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Shabakah
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/matches" className="hover:text-yellow-400">
              Matches
            </Link>
          </li>
          <li>
            <Link href="/standings" className="hover:text-yellow-400">
              Standings
            </Link>
          </li>
          <li>
            <Link href="/rankings" className="hover:text-yellow-400">
              Rankings
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-yellow-400">
              News
            </Link>
          </li>
        </ul>

        {/* Language Toggle */}
        <div>
          <Link
            href="/ar"
            className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400"
          >
            AR
          </Link>
        </div>
      </nav>
    </header>
  );
}
